---
title: Seata 2.0 相关
date: 2022-05-24 14:39:56
permalink: /pages/b3b725/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: luxiaokai
  link: https://github.com/luxiaokai
---
# Seata 1.2.0 相关

## 1. seata 源码流程图



![seata源码流程图](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/seata源码流程图.png)



### 1.1 seata如何与spring整合

seata核心为代理数据源与aop拦截方法

代理数据源：

```java
@EnableAutoDataSourceProxy ---> 
@Import(AutoDataSourceProxyRegistrar.class) --->
AutoDataSourceProxyRegistrar  ----> 
向spring容器注册一个BeanDefinition SeataAutoDataSourceProxyCreator --->
SeataAutoDataSourceProxyAdvice  ----->
DataSourceProxy ---->
ConnectionProxy ----> //代理连接
StatementProxy  -- //代理Statement
```



拦截方法：

```
seata-spring-boot-starter ---->
resources/META-INF/spring.factories/SeataAutoConfiguration --->
@Bean GlobalTransactionScanner
```

分别对应两大块

GlobalTransactionScanner

```
全局事务扫描器
实现了AbstractAutoProxyCreator类，重写了wrapIfNecessary()方法，在spring初始化时，会回调wrapIfNecessary()方法。
wrapIfNecessary方法执行的操作：
	专门给类(类中有方法添加了@GlobalTransactional或@GlobalLock注解)生成代理对象,在真正执行目标方法前，做一些自己的事情(开启全局事务。。。)
```



DataSourceProxy

```
AutoDataSourceProxyRegistrar  ----》 向spring容器注册一个BeanDefinition[ Class : SeataAutoDataSourceProxyCreator]

SeataAutoDataSourceProxyCreator ----》SeataAutoDataSourceProxyAdvice  -----》DataSourceProxy ----》ConnectionProxy ----》StatementProxy

代理数据源，将DataSource，jdbc的Connection,Statement全部代理，在执行真正的crud之前，做一些自己的操作（前置镜像，后置镜像，分支事务，UndoLog操作，最后提交）
```



### 1.2 seata应用

1. seata分布式事务隔离性：默认读已提交

2. seata分布式事务与本地事务发生脏写：过程：分布式事务第一阶段结束，释放本地锁后，另一个本地事务写数据

   ```
   发生本地事务的方法添加@GlobalLock或@GlobalTransactional
   建议添加@GlobalLock,因为@@GlobalLock只去检查要操作的数据是否有全局锁，减少了与服务端请求的次数
   ```

3. seata分布式事务与本地事务发生脏读：过程：分布式事务第一阶段结束，释放本地锁后，另一个本地事务读数据

   ```
   发生本地事务的方法添加@GlobalTransactional注解，并且查询语句后面加for update
   ```

   

### 1.3 遇到的问题

1. 事务发起方加了@GlobalTransactional注解，当这两条sql(本地sql与远程sql)都调用成功，做最终提交的时候，服务端如何向两个服务发送删除undoLog表数据请求？

   发生的场景：
   		orderDao.updateNumber(id);
   		stockApi.remoteUpdate(id);(远程调用)

   问题解答：

   ​		服务端做最终提交时，根据全局事务查询其下的全部分支事务，在循环分支事务时，根据分支事务的resourceId和clientId确定要给哪个客户端发送请求，让客户端删除undoLog表数据。

