---
title: Sentinel
date: 2022-05-24 14:59:18
permalink: /pages/114fc4/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: luxiaokai
  link: https://github.com/luxiaokai
---
# Sentinel

## Sentinel 是什么？

随着微服务的流行，服务和服务之间的稳定性变得越来越重要。Sentinel 以流量为切入点，从流量控制、熔断降级、系统负载保护等多个维度保护服务的稳定性。 Sentinel是阿里巴巴开源的限流器熔断器，并且带有可视化操作界面。 
<!-- more -->
Sentinel 具有以下特征:

- **丰富的应用场景**：Sentinel 承接了阿里巴巴近 10 年的双十一大促流量的核心场景，例如秒杀（即突发流量控制在系统容量可以承受的范围）、消息削峰填谷、集群流量控制、实时熔断下游不可用应用等。
- **完备的实时监控**：Sentinel 同时提供实时的监控功能。您可以在控制台中看到接入应用的单台机器秒级数据，甚至 500 台以下规模的集群的汇总运行情况。
- **广泛的开源生态**：Sentinel 提供开箱即用的与其它开源框架/库的整合模块，例如与 Spring Cloud、Dubbo、gRPC 的整合。您只需要引入相应的依赖并进行简单的配置即可快速地接入 Sentinel。
- **完善的 SPI 扩展点**：Sentinel 提供简单易用、完善的 SPI 扩展接口。您可以通过实现扩展接口来快速地定制逻辑。例如定制规则管理、适配动态数据源等。



## Spring Cloud Alibaba Sentinel

 https://github.com/alibaba/spring-cloud-alibaba/wiki/Sentinel 

## 流量控制效果

sentinel的控制台只是配置接口的流控规则，但是他并不保存流控规则，流控规则是保存在客户端的，也就是说客户端所在的微服务一旦重启，之前配置的流控规则就没有了，需要重新配置。

第一次启动控制台，因为懒加载模式，需要请求一次接口。

### QPS流控：

![1598182040216](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598182040216.png)

qps： 每秒请求数 ，如上图所示，

###### 简单流控规则：



如果给qpsSentinel接口增加qps流控，单机阈值设置为1，则在一秒钟内只能处理一次请求的响应。

![1598345770187](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598345770187.png)

###### 排队等待：

排队等待原理是漏桶算法，qps设置为1，表示此接口每秒只能处理一个请求，如果一秒内提交了多次请求，就进行排队，排队超时时间，如上图所示，排队超过5秒就直接结束。

此时如果1秒钟内有10个请求打进来，根据漏桶算法规则，10个请求中一定会超时的请求会直接报错，而不再等待。

![1598345901830](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598345901830.png)

###### 预热：

如上图所示，qpsSentinel接口的qps设置为10，但是sentinel会将值除以3，也就是qps为3，平常状态下qps为3，如果某一秒接收到了大于3的请求，依然会被流控拦截，但是下面配置了预热时间，10s，如果10s后，访问此接口的qps还是大于3，那么就会把此接口对应的qps真正改为10



### 线程流控：

![1598337315985](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598337315985.png)

如上图所示，如果给threadSentinel接口增加线程流控，单机阈值设置为1，那么此接口在服务端只能用一个线程处理，如果连续发送两条请求，第一个请求还没有处理完，第二个请求就发送到了服务端，直接拒收



其他的操作跟QPS流控流程一样



### 热点流控

![1598493422025](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598493422025.png)

如上图所示配置的热点流控规则，如果访问test接口，没有传参数，那么这个流控规则对此次请求无效，如果传了参数，服务端在1s内接收到2个带参数的请求，就会触发流控（但是此种方法是一棒子打死的类型，只要你传了参数并符合流控的qps，就会触发）。

![1598494238635](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598494238635.png)

如上图所示，这两个单机阈值是共存的，当请求接口的第一个参数为xxx出轨了，下面的单机阈值监听，当请求接口的第一个参数为其他时，上面的单机阈值监听，当没有参数时，针对此接口的整个热点规则不生效



## 流量控制模式

##### 直接

上面测试的全部都是直接模式

##### 关联

例如：当库存服务达到2qps，就限流订单服务。

![1598701079851](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598701079851.png)

如上图所示的配置，

后台启动定时器，首先按照1qps去访问store接口，order接口可以正常访问

按照2qps去访问store接口，order接口被限流



##### 链路

 链路流控只记录指定链路上的流量 ，例如有一个service A，他作为一个sentinel的资源，有两个controller中的方法 B ，C调用了A， （可以指定资源从入口资源进来的流量 进行流控），比如只想针对从B方法调用进来的A进行qps流控，但是C方法调用进来的A还可以正常访问

**其他的流控规则都是针对上游微服务的，而链路流控是针对方法接口的**

## 降级规则

sentinel中将降级的自定义返回与熔断的自定义返回分开了，而hystrix并没有区分

###### RT(慢调用比例)

计算单位为s

如果给接口配置了RT熔断，如果接口的qps>=最小请求数，那么sentinel就会计算接口响应的平均值，如果平均值超过了设置的阈值，那么就会触发熔断，熔断的时间为设置的熔断时长

###### 异常比例

计算单位为s

如果给接口配置了异常比例熔断，如果接口的qps>=最小请求数，并且每秒内异常比例超过设置的阈值，就会触发熔断，熔断的时间为设置的熔断时长

异常数

如果给接口配置了异常数熔断，如果接口的qps>=最小请求数，并且异常数超过设置的阈值，就会触发熔断，熔断时间为设置的熔断时长

##### 系统自适应流控(全局系统流控)

系统自适应流控是针对系统全部的接口而定的，优先级高于各个接口自定义的流控规则



#### 系统规则

![1598494930905](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598494930905.png)

- LOAD：系统自适应，根据线程数来的，只支持linux/unix系统 （仅对 Linux/Unix-like 机器生效）：系统的 load1 作为启发指标，进行自适应系统保护。当系统 load1 超过设定的启发值，且系统当前的并发线程数超过估算的系统容量时才会触发系统保护（BBR 阶段）。系统容量由系统的 `maxQps * minRt` 估算得出。设定参考值一般是 `CPU cores * 2.5`。 

- RT：全局响应时间 ：当单台机器上所有入口流量的平均 RT 达到阈值即触发系统保护，单位是毫秒。 

- 线程数：全局线程数 ：当单台机器上所有入口流量的并发线程数达到阈值即触发系统保护。 

- 入口QPS：全局qps： 当单台机器上所有入口流量的 QPS 达到阈值即触发系统保护。 

- cpu使用率：cpu使用率： 当系统 CPU 使用率超过阈值即触发系统保护（取值范围 0.0-1.0），比较灵敏。 

优先级：系统规则 > 单个接口设置的规则

#### @SentinelResource 注解

详细的注解介绍： [https://github.com/alibaba/Sentinel/wiki/%E6%B3%A8%E8%A7%A3%E6%94%AF%E6%8C%81](https://github.com/alibaba/Sentinel/wiki/注解支持) 

**此注解不支持private方法**

@SentinelResource注解的各个属性讲解：

	-  blockHander 用来处理BlockException异常，触发条件为：服务熔断，服务限流
	-  fallback 用来处理Throwable异常，触发条件为：服务降级
	-  blockHandlerClass 可以和blockHander配合使用，但是注意：blockHandlerClass 类中指定的方法必须为静态方法 
	-  fallbackClass 可以和fallback 配合使用，但是注意：blockHandlerClass 类中指定的方法必须为静态方法 

## 与ribbon整合

与ribbon整合比较简单，注入RestTemplate并加入@LoadBalanced注解即可。

![1598607497943](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598607497943.png)



## 与feign整合

与feign整合的话除了feign的必备的配置外，还需要增加

![1598607551029](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598607551029.png)



![1598607754287](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1598607754287.png)



## sentinel的持久化

众所周知，持久化必须有一个DataSource（此DataSource并不局限于关系型数据库，一些nosql数据库，redis，zookerpeer，nacos。。。）

sentinel目前的官网的持久化，只实现了本地文件的持久化，以及对于nacos的读操作，但是并没有对于nacos的写操作。
