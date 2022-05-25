---
title: eureka
date: 2022-05-20 15:21:36
permalink: /pages/65693c/
categories: 
  - 技术
  - 技术文档
tags: 
  - null
author: 
  name: luxiaokai
  link: https://github.com/luxiaokai
sidebar: auto
---
# Eureka

### eureka是什么？



​					eureka是Netflix的子模块之一，也是一个核心的模块，eureka里有2个组件，一个是EurekaServer(一个独立的项目) 这个是用于定位服务以实现中间层服务器的负载平衡和故障转移，另一个便是EurekaClient（我们的微服务） 它是用于与Server交互的，可以使得交互变得非常简单:只需要通过服务标识符即可拿到服务。

<!-- more -->

### 与spring-cloud的关系：



Spring Cloud 封装了 Netflix 公司开发的 Eureka 模块来实现服务注册和发现(可以对比Zookeeper)。



Eureka 采用了 C-S 的设计架构。Eureka Server 作为服务注册功能的服务器，它是服务注册中心。



而系统中的其他微服务，使用 Eureka 的客户端连接到 Eureka Server并维持心跳连接。这样系统的维护人员就可以通过 Eureka Server 来监控系统中各个微服务是否正常运行。SpringCloud 的一些其他模块（比如Zuul）就可以通过 Eureka Server 来发现系统中的其他微服务，并执行相关的逻辑。



### 角色关系图：

![eureka角色关系图.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/563988/1583298803542-2e6f615d-b7a1-4976-ab4e-85f8b3df1b0a.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

### 如何使用？



​					在spring-cloud项目里面加入依赖：



​				     eureka客户端：



```
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-client</artifactId>
        </dependency>
```



​					 eureka服务端：



```
        <dependency>
            <groupId>org.springframework.cloud</groupId>
            <artifactId>spring-cloud-starter-netflix-eureka-server</artifactId>
        </dependency>
```



​		eureka服务端项目里面加入以下配置：



```
server:
  port: 3000
eureka:
  server:
    enable-self-preservation: false  #关闭自我保护机制
    eviction-interval-timer-in-ms: 4000 #设置清理间隔（单位：毫秒 默认是60*1000）
  instance:
    hostname: localhost


  client:
    registerWithEureka: false #不把自己作为一个客户端注册到自己身上
    fetchRegistry: false  #不需要从服务端获取注册信息（因为在这里自己就是服务端，而且已经禁用自己注册了）
    serviceUrl:
      defaultZone: http://${eureka.instance.hostname}:${server.port}/eureka
```



​	当然，不是全部必要的，这里只是把我这里的配置copy过来了



​	然后在spring-boot启动项目上 加入注解:@EnableEurekaServer  就可以启动项目了



```
@EnableEurekaServer
@SpringBootApplication
public class AppEureka {

    public static void main(String[] args) {
        SpringApplication.run(AppEureka.class);

    }
}
```



如果看见这个图片，那么说明你就搭建好了:



![eureka服务端效果图.png](https://cdn.nlark.com/yuque/0/2020/png/563988/1583298816264-0ea929a4-9bdb-4763-b09a-7c7bce380b2e.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

这个警告只是说你把他的自我保护机制关闭了



eureka客户端配置:



```
server:
  port: 6000
eureka:
  client:
    serviceUrl:
        defaultZone: http://localhost:3000/eureka/  #eureka服务端提供的注册地址 参考服务端配置的这个路径
  instance:
    
    instance-id: power-1 #此实例注册到eureka服务端的唯一的实例ID 
    prefer-ip-address: true #是否显示IP地址
    leaseRenewalIntervalInSeconds: 10 #eureka客户需要多长时间发送心跳给eureka服务器，表明它仍然活着,默认为30 秒 (与下面配置的单位都是秒)
    leaseExpirationDurationInSeconds: 30 #Eureka服务器在接收到实例的最后一次发出的心跳后，需要等待多久才可以将此实例删除，默认为90秒

spring:
  application:
    name: server-power #此实例注册到eureka服务端的name
```



然后在客户端的spring-boot启动项目上 加入注解:@EnableEurekaClient  就可以启动项目了 这里就不截图了我们直接来看效果图：



![eureka客户端效果图.png](https://cdn.nlark.com/yuque/0/2020/png/563988/1583298829220-a30b5903-16be-4d1d-b317-a3ad3c646ab8.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

这里我们能看见 名字叫server-power的（图中将其大写了） id为 power-1的服务 注册到我们的Eureka上面来了 至此，一个简单的eureka已经搭建好了。



## eureka集群:



### eureka集群原理



​			服务启动后向Eureka注册，Eureka Server会将注册信息向其他Eureka Server进行同步，当服务消费者要调用服务提供者，则向服务注册中心获取服务提供者地址，然后会将服务提供者地址缓存在本地，下次再调用时，则直接从本地缓存中取，完成一次调用。



### eureka集群配置



​			刚刚我们了解到 Eureka Server会将注册信息向其他Eureka Server进行同步 那么我们得声明有哪些server呢？



这里 假设我们有3个Eureka Server 如图：

![QQ截图20190106213959.png](https://cdn.nlark.com/yuque/0/2020/png/563988/1583298867600-6176d79d-f663-48b7-b3c8-e8b740d289a2.png)



现在怎么声明集群环境的server呢？ 我们看一张图：



![eureka集群示意图.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/563988/1583298878937-df161bcc-5e49-4ae0-87c6-f05d819456ed.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

可能看着有点抽象，我们来看看具体配置



```
server:
  port: 3000
eureka:
  server:
    enable-self-preservation: false
    eviction-interval-timer-in-ms: 4000
  instance:
    hostname: eureka3000.com


  client:
    registerWithEureka: false
    fetchRegistry: false
    serviceUrl:
      defaultZone: http://eureka3001.com:3001/eureka,http://eureka3002.com:3002/eureka
```



这里 方便理解集群 我们做了一个域名的映射(条件不是特别支持我使用三台笔记本来测试。。。) 至于域名怎么映射的话 这里简单提一下吧 修改你的hosts文件（win10的目录在C:\Windows\System32\drivers\etc 其他系统的话自行百度一下把）附上我的hosts文件：



```
   127.0.0.1  eureka3000.com
   127.0.0.1  eureka3001.com
   127.0.0.1  eureka3002.com
```



我们回到主题， 我们发现 集群配置与单体不同的点在于 原来是把服务注册到自己身上，而现在是注册到其它服务身上



至于为什么不注册自己了呢？，回到最上面我们说过，eureka的server会把自己的注册信息与其他的server同步，所以这里我们不需要注册到自己身上，因为另外两台服务器会配置本台服务器。(这里可能有点绕，可以参考一下刚刚那张集群环境的图，或者自己动手配置一下，另外两台eureka的配置与这个是差不多的，就不发出来了，只要注意是注册到其他的服务上面就好了)



当三台eureka配置好之后，全部启动一下就可以看见效果了:![集群eureka效果图.png](https://cdn.nlark.com/yuque/0/2020/png/563988/1583298940835-e9df5fae-a2f7-4ba2-871b-014317cdbf79.png?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_14%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)



当然，我们这里仅仅是把服务端配置好了， 那客户端怎么配置呢？ 话不多说，上代码：



```
  client:
    serviceUrl:
        defaultZone: http://localhost:3000/eureka/,http://eureka3001.com:3001/eureka,http://eureka3002.com:3002/eureka
```



我们这里只截取了要改动的那一部分。 就是 原来是注册到那一个地址上面，现在是要写三个eureka注册地址，但是不是代表他会注册三次，因为我们eureka server的注册信息是同步的，这里只需要注册一次就可以了，但是为什么要写三个地址呢。因为这样就可以做到高可用的配置：打个比方有3台服务器。但是突然宕机了一台， 但是其他2台还健在，依然可以注册我们的服务，换句话来讲， 只要有一台服务还建在，那么就可以注册服务，这里 需要理解一下。



这里效果图就不发了， 和之前单机的没什么两样，只是你服务随便注册到哪个eureka server上其他的eureka server上都有该服务的注册信息。



## CAP定理的含义：

![cap定理.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/563988/1583299006622-5dd0bcb3-049c-425a-8e3f-f99fa779ee4e.jpeg)



1998年，加州大学的计算机科学家 Eric Brewer 提出，分布式系统有三个指标。



```
Consistency --- 一致性
Availability ---可用性
Partition tolerance  ---分区容错性
```



他们第一个字母分别是C,A,P



Eric Brewer 说，这三个指标不可能同时做到。这个结论就叫做 CAP 定理。



### Partition tolerance



中文叫做"分区容错"。



大多数分布式系统都分布在多个子网络。每个子网络就叫做一个区（partition）。分区容错的意思是，区间通信可能失败。比如，一台服务器放在本地，另一台服务器放在外地（可能是外省，甚至是外国），这就是两个区，它们之间可能无法通信。



![分区容错.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/563988/1583299033940-eb0caebf-f708-4933-87cf-13ae94362044.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_10%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

上图中，S1 和 S2 是两台跨区的服务器。S1 向 S2 发送一条消息，S2 可能无法收到。系统设计的时候，必须考虑到这种情况。



一般来说，分区容错无法避免，因此可以认为 CAP 的 P 总是成立。CAP 定理告诉我们，剩下的 C 和 A 无法同时做到。



### Consistency



Consistency 中文叫做"一致性"。意思是，写操作之后的读操作，必须返回该值。举例来说，某条记录是 v0，用户向 S1 发起一个写操作，将其改为 v1。



![一致性.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/563988/1583299055578-ef825689-93ba-4ba2-88ff-bd5a3d1663b5.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_10%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

接下来用户读操作就会得到v1。这就叫一致性。





问题是，用户有可能会向S2发起读取操作，由于G2的值没有发生变化，因此返回的是v0，所以S1和S2的读操作不一致，这就不满足一致性了



![一致性，读.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/563988/1583299081576-cecd2e22-ddff-4f28-a630-f003fb2c7685.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_10%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)

为了让S2的返回值与S1一致，所以我们需要在往S1执行写操作的时候，让S1给S2也发送一条消息，要求G2也变成v1

![一致性，读2.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/563988/1583299084879-e8fdbf9f-fb96-4336-bfd9-cadf0796bad4.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_10%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)



这样子用户向G2发起读操作，就也能得到v1

![统一一致.jpg](https://cdn.nlark.com/yuque/0/2020/jpeg/563988/1583299088396-dd9fa56e-3631-4527-81a7-65188279076b.jpeg?x-oss-process=image%2Fwatermark%2Ctype_d3F5LW1pY3JvaGVp%2Csize_10%2Ctext_6bKB54-t5a2m6Zmi5Ye65ZOB%2Ccolor_FFFFFF%2Cshadow_50%2Ct_80%2Cg_se%2Cx_10%2Cy_10)



### Availability



​		Availability 中文叫做"可用性"，意思是只要收到用户的请求，服务器就必须给出回应。



用户可以选择向 S1 或 S2 发起读操作。不管是哪台服务器，只要收到请求，就必须告诉用户，到底是 v0 还是 v1，否则就不满足可用性。



### Consistency 和 Availability 的矛盾



一致性和可用性，为什么不可能同时成立？答案很简单，因为可能通信失败（即出现分区容错）。



如果保证 S2 的一致性，那么 S1 必须在写操作时，锁定 S2 的读操作和写操作。只有数据同步后，才能重新开放读写。锁定期间，S2 不能读写，没有可用性不。



如果保证 S2 的可用性，那么势必不能锁定 S2，所以一致性不成立。



综上所述，S2 无法同时做到一致性和可用性。系统设计时只能选择一个目标。如果追求一致性，那么无法保证所有节点的可用性；如果追求所有节点的可用性，那就没法做到一致性。



## Eureka对比Zookeeper：



​		Zookeeper在设计的时候遵循的是CP原则，即一致性,Zookeeper会出现这样一种情况，当master节点因为网络故障与其他节点失去联系时剩余节点会重新进行leader选举，问题在于，选举leader的时间太长：30~120s，且选举期间整个Zookeeper集群是不可用的，这就导致在选举期间注册服务处于瘫痪状态，在云部署的环境下，因网络环境使Zookeeper集群失去master节点是较大概率发生的事情，虽然服务能够最终恢复，但是漫长的选举时间导致长期的服务注册不可用是不能容忍的。



​		Eureka在设计的时候遵循的是AP原则，即可用性。Eureka各个节点（服务)是平等的， 没有主从之分，几个节点down掉不会影响正常工作，剩余的节点（服务） 依然可以提供注册与查询服务，而Eureka的客户端在向某个Eureka注册或发现连接失败，则会自动切换到其他节点，也就是说，只要有一台Eureka还在，就能注册可用（保证可用性）， 只不过查询到的信息不是最新的（不保证强一致），除此之外，Eureka还有自我保护机制，如果在15分钟内正常心跳的节点小于85%节点，那么eureka就认为客户端与注册中心出现了网络故障，此时会出现一下情况:



1:Eureka 不再从注册列表中移除因为长时间没有收到心跳而过期的服务。



2：Eureka 仍然能够接收新服务的注册和查询请求，但是不会被同步到其它节点上（即保证当前节点可用）



3： 当网络稳定后，当前实例新的注册信息会被同步到其它节点中







自我保护机制：(主要是针对eureka服务本身出现问题)当eureka判断有大量的微服务心跳过期，就会尝试启动自我保护机制，不会主动剔除服务



id：用来标识唯一的微服务

name：标识某个微服务的集群



## 源码解析：

eureka底层用来接收网络通信的框架是Jersey，与springMvc用法差不多，与springMvc有所不用的是springMvc处理请求是基于servlet的，Jersey是基于filter的



### Eureka Server源码

比较重要的属性：

````java
//存放注册的微服务
 private final ConcurrentHashMap<String, Map<String, Lease<InstanceInfo>>> registry
            = new ConcurrentHashMap<String, Map<String, Lease<InstanceInfo>>>();
//具体的微服务实例
InstanceInfo
    lastDirtyTimestamp：微服务实例对象最后操作的时间戳
//租债器对象
Lease
    registrationTimestamp：服务注册的事件戳
    serviceUpTimestamp：恢复正常工作状态的时间戳
    evictionTimestamp：服务被剔除的时间戳
    lastUpdateTimestamp：最后操作时间戳,用于心跳续约，服务剔除
    1596458413497 2020-8-3 20:40:13
    1596458448729 2020-8-3 20:40:48
    
numberOfRenewsPerMinThreshold：自我保护阈值
expectedNumberOfClientsSendingRenews：客户端数量
renewalPercentThreshold：自我保护机制的触发百分比，默认85%(当正常的微服务数量大小小于85%时)
shouldEnableSelfPreservation：是否开启了自我保护机制
````



上面的registry为存放注册的微服务的map，分析一下此数据结构

![1596460106974](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596460106974.png)

例如上图所示：有一个微服务集群，为订单服务（order），拆分成了3个微服务。

注册到eureka服务端后，ConcurrentHashMap<String, Map<String, Lease<InstanceInfo>>>

String为：order

对应的value,也就是后面的Map，有三个键值对，分别为：

order_1： Lease<InstanceInfo>

order_2：Lease<InstanceInfo>

order_3：Lease<InstanceInfo>

![1596460913123](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596460913123.png)

#### 配置生效

eureka与springcloud整合的jar包是org.springframework.cloud:spring-cloud-netflix-eureka-server-2.2.3.RELEASE.jar

在此jar包的META-INF/spring.factories文件中有一个eureka自动配置类的全路径名EurekaServerAutoConfiguration。

在自己项目使用eureka server，除了需要添加依赖外，还要增加一个@EnableEurekaServer注解，此注解使用@Import向springboot容器中注入了一个Maker Bean，此Bean没有任何其他作用，主要作用就是让EurekaServerAutoConfigutation自动配置类上的@ConditionalOnBean注解去判断标记类是否存在，从而决定是否向springBoot容器中注入此配置类并且让此配置类生效。



在EurekaServerAutoConfiguration类中，初始化了Jersey的Filter，并将他放入到了servlet的Filter中，指定拦截请求/eureka/*

![1596118597937](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596118597937.png)



#### 服务注册

在com.netflix.eureka:eureka-core:1.9.21 eureka的核心包中的ApplicationResource类，此类类似于springMvc的Controller类，用来接受并处理相应的请求，其中接受服务注册的方法为：com.netflix.eureka.resources.ApplicationResource#addInstance

```
@POST
    @Consumes({"application/json", "application/xml"})
    public Response addInstance(InstanceInfo info, @HeaderParam("x-netflix-discovery-replication") String isReplication) {
        logger.debug("Registering instance {} (replication={})", info.getId(), isReplication);
        if (this.isBlank(info.getId())) {
            return Response.status(400).entity("Missing instanceId").build();
        } else if (this.isBlank(info.getHostName())) {
            return Response.status(400).entity("Missing hostname").build();
        } else if (this.isBlank(info.getIPAddr())) {
            return Response.status(400).entity("Missing ip address").build();
        } else if (this.isBlank(info.getAppName())) {
            return Response.status(400).entity("Missing appName").build();
        } else if (!this.appName.equals(info.getAppName())) {
            return Response.status(400).entity("Mismatched appName, expecting " + this.appName + " but was " + info.getAppName()).build();
        } else if (info.getDataCenterInfo() == null) {
            return Response.status(400).entity("Missing dataCenterInfo").build();
        } else if (info.getDataCenterInfo().getName() == null) {
            return Response.status(400).entity("Missing dataCenterInfo Name").build();
        } else {
        //判断是否是云服务
            DataCenterInfo dataCenterInfo = info.getDataCenterInfo();
            if (dataCenterInfo instanceof UniqueIdentifier) {
                String dataCenterInfoId = ((UniqueIdentifier)dataCenterInfo).getId();
                if (this.isBlank(dataCenterInfoId)) {
                    boolean experimental = "true".equalsIgnoreCase(this.serverConfig.getExperimental("registration.validation.dataCenterInfoId"));
                    if (experimental) {
                        String entity = "DataCenterInfo of type " + dataCenterInfo.getClass() + " must contain a valid id";
                        return Response.status(400).entity(entity).build();
                    }

                    if (dataCenterInfo instanceof AmazonInfo) {
                        AmazonInfo amazonInfo = (AmazonInfo)dataCenterInfo;
                        String effectiveId = amazonInfo.get(MetaDataKey.instanceId);
                        if (effectiveId == null) {
                            amazonInfo.getMetadata().put(MetaDataKey.instanceId.getName(), info.getId());
                        }
                    } else {
                        logger.warn("Registering DataCenterInfo of type {} without an appropriate id", dataCenterInfo.getClass());
                    }
                }
            }
			//正常情况下会走这里
            this.registry.register(info, "true".equals(isReplication));
            return Response.status(204).build();
        }
    }
```

registry类图



![1596119050683](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596119050683.png)



InstanceRegistry是springCloud扩展的类，在注册时首先发布了一个事件，供其他监听器监听，然后调用父类的register方法开始服务注册与集群同步

```java
@Override
	public void register(InstanceInfo info, int leaseDuration, boolean isReplication) {
		//发布事件
		handleRegistration(info, leaseDuration, isReplication);
		//调用父类进行服务注册
		super.register(info, leaseDuration, isReplication);
	}
```

com.netflix.eureka.registry.PeerAwareInstanceRegistryImpl#register

PeerAwareInstanceRegistryImpl类负责集群同步，先调用父类的register方法进行微服务注册，然后将此微服务信息发送到其他eureka服务端，做集群同步

```java
 @Override
    public void register(final InstanceInfo info, final boolean isReplication) {
        int leaseDuration = Lease.DEFAULT_DURATION_IN_SECS;
        if (info.getLeaseInfo() != null && info.getLeaseInfo().getDurationInSecs() > 0) {
            leaseDuration = info.getLeaseInfo().getDurationInSecs();
        }
        //注册实例
        super.register(info, leaseDuration, isReplication);
        //集群同步
        replicateToPeers(Action.Register, info.getAppName(), info.getId(), info, null, isReplication);
    }
```



主要的注册逻辑在com.netflix.eureka.registry.AbstractInstanceRegistry#register方法中

```java
public void register(InstanceInfo registrant, int leaseDuration, boolean isReplication) {
        try {
            read.lock();
            //此处根据微服务注册的appName去存放注册的微服务的gMap中拿去微服务组
            Map<String, Lease<InstanceInfo>> gMap = registry.get(registrant.getAppName());
            REGISTER.increment(isReplication);
            if (gMap == null) {
                final ConcurrentHashMap<String, Lease<InstanceInfo>> gNewMap = new ConcurrentHashMap<String, Lease<InstanceInfo>>();
                //putIfAbsent 原子性操作，如果没有此微服务组，则添加进去
                gMap = registry.putIfAbsent(registrant.getAppName(), gNewMap);
                if (gMap == null) {
                    gMap = gNewMap;
                }
            }
            //如果有注册进来的微服务组，去拿指定的实例，讲道理，90%情况下是拿不到的
            Lease<InstanceInfo> existingLease = gMap.get(registrant.getId());
            //如果真的拿到了，就使用最新的微服务实例，根据existingLastDirtyTimestamp判断
            if (existingLease != null && (existingLease.getHolder() != null)) {
                Long existingLastDirtyTimestamp = existingLease.getHolder().getLastDirtyTimestamp();
                Long registrationLastDirtyTimestamp = registrant.getLastDirtyTimestamp();
                logger.debug("Existing lease found (existing={}, provided={}", existingLastDirtyTimestamp, registrationLastDirtyTimestamp);

                // this is a > instead of a >= because if the timestamps are equal, we still take the remote transmitted
                // InstanceInfo instead of the server local copy.
                if (existingLastDirtyTimestamp > registrationLastDirtyTimestamp) {
                    logger.warn("There is an existing lease and the existing lease's dirty timestamp {} is greater" +
                            " than the one that is being registered {}", existingLastDirtyTimestamp, registrationLastDirtyTimestamp);
                    logger.warn("Using the existing instanceInfo instead of the new instanceInfo as the registrant");
                    registrant = existingLease.getHolder();
                }
            } else {
                // The lease does not exist and hence it is a new registration
                synchronized (lock) {
                    if (this.expectedNumberOfClientsSendingRenews > 0) {
                        // Since the client wants to register it, increase the number of clients sending renews
                        this.expectedNumberOfClientsSendingRenews = this.expectedNumberOfClientsSendingRenews + 1;
                        updateRenewsPerMinThreshold();
                    }
                }
                logger.debug("No previous lease information found; it is new registration");
            }
            Lease<InstanceInfo> lease = new Lease<InstanceInfo>(registrant, leaseDuration);
            if (existingLease != null) {
                lease.setServiceUpTimestamp(existingLease.getServiceUpTimestamp());
            }
            //存入存放注册的微服务的map集合
            gMap.put(registrant.getId(), lease);
            recentRegisteredQueue.add(new Pair<Long, String>(
                    System.currentTimeMillis(),
                    registrant.getAppName() + "(" + registrant.getId() + ")"));
            // This is where the initial state transfer of overridden status happens
            if (!InstanceStatus.UNKNOWN.equals(registrant.getOverriddenStatus())) {
                logger.debug("Found overridden status {} for instance {}. Checking to see if needs to be add to the "
                                + "overrides", registrant.getOverriddenStatus(), registrant.getId());
                if (!overriddenInstanceStatusMap.containsKey(registrant.getId())) {
                    logger.info("Not found overridden id {} and hence adding it", registrant.getId());
                    overriddenInstanceStatusMap.put(registrant.getId(), registrant.getOverriddenStatus());
                }
            }
            InstanceStatus overriddenStatusFromMap = overriddenInstanceStatusMap.get(registrant.getId());
            if (overriddenStatusFromMap != null) {
                logger.info("Storing overridden status {} from map", overriddenStatusFromMap);
                registrant.setOverriddenStatus(overriddenStatusFromMap);
            }

            // Set the status based on the overridden status rules
            InstanceStatus overriddenInstanceStatus = getOverriddenInstanceStatus(registrant, existingLease, isReplication);
            registrant.setStatusWithoutDirty(overriddenInstanceStatus);

            // If the lease is registered with UP status, set lease service up timestamp
            if (InstanceStatus.UP.equals(registrant.getStatus())) {
                lease.serviceUp();
            }
            registrant.setActionType(ActionType.ADDED);
            recentlyChangedQueue.add(new RecentlyChangedItem(lease));
            registrant.setLastUpdatedTimestamp();
            invalidateCache(registrant.getAppName(), registrant.getVIPAddress(), registrant.getSecureVipAddress());
            logger.info("Registered instance {}/{} with status {} (replication={})",
                    registrant.getAppName(), registrant.getId(), registrant.getStatus(), isReplication);
        } finally {
            read.unlock();
        }
    }
```



当eureka服务端注册完成后，就会去集群同步，根据配置文件配置的其他eureka服务端地址，依次发送请求，此请求与客户端发送的注册请求大体一样。

#### 心跳续约

每个微服务会定时发送请求，给注册中心以确认服务还在正常工作，服务会保存最后一次操作的时间（注册，心跳续约，服务下架都算操作）

服务端入口在com.netflix.eureka.resources.InstanceResource#renewLease方法，此方法处理客户端心跳续约的请求

![1596458844779](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596458844779.png)

心跳续约将简单点，就是将租债器的最后操作时间戳更新。

**但是此处有一个eureka的bug，在租债器中有一个判断实例是否过期的方法**<img src="https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596459563484.png" alt="1596459563484" style="zoom:200%;" />

#### 服务下架

**服务剔除与服务下架的区别：**

服务剔除：eureka服务端主动发现过期的eureka客户端，并将此客户端剔除

服务下架：eureka客户端主动发送下架请求，服务端将此客户端下架



程序入口：com.netflix.eureka.resources.InstanceResource#cancelLease

最后会将此实例从map中删除

![1596547690845](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596547690845.png)

最后会将此实例对应的租债器的evictionTimestamp属性（服务被剔除的时间戳）设置为当前时间（此处不知道为什么？因为前面已经将他删除了）

#### 服务剔除

服务剔除定时器默认(60 * 1000) 1分钟执行一次。

服务端在收到最后一次心跳后等待的时间上限，默认是90s，超过则剔除

注意：服务剔除并不会集群同步，因为没有必要，每个服务端都会维护定时器去剔除服务。

在配置生效阶段，EurekaServerAutoConfiguration自动配置类，使用@Import注解导入了一个EurekaServerInitializerConfiguration类，此类实现了ServletContextAware, SmartLifecycle两个接口。

ServletContextAware：spring环境初始化完成后，将ServletContext容器上下文对象给实现了此接口的类。SmartLifecycle：在spring容器启动后，销毁前做一些自定义的事情。

主要的实现在org.springframework.cloud.netflix.eureka.server.EurekaServerInitializerConfiguration#start方法

![1596549657229](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596549657229.png)

此处新开一个线程，去初始化eureka环境，如果报错，不影响主线程执行。

org.springframework.cloud.netflix.eureka.server.EurekaServerBootstrap#contextInitialized

![1596549683540](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596549683540.png)



org.springframework.cloud.netflix.eureka.server.EurekaServerBootstrap#initEurekaServerContext

![1596549943239](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596549943239.png)

```
int registryCount = this.registry.syncUp();
用来同步eureka服务端中的微服务实例，例如：eurekaServer1 中有10个微服务，过了5分钟，eurekaServer2启动，代码走到这里，会去同步这10个微服务
```



com.netflix.eureka.registry.PeerAwareInstanceRegistryImpl#syncUp

![1596550135236](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596550135236.png)

```java
//同步并且注册的微服务实例数量
int count = 0;
//重试次数
serverConfig.getRegistrySyncRetries()
//重试等待时间
serverConfig.getRegistrySyncRetryWaitMs()
//用客户端的代码去拉取微服务信息
Applications apps = eurekaClient.getApplications();
//注册，此处看到第三个参数传的true，表示注册完后就不会同步了
register(instance, instance.getLeaseInfo().getDurationInSecs(), true);
```

同步任务完成后，主线程继续向下执行，到了初始化服务剔除的定时器。

在com.netflix.eureka.registry.AbstractInstanceRegistry#postInit方法中

![1596550534837](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596550534837.png)



具体的剔除逻辑在com.netflix.eureka.registry.AbstractInstanceRegistry#evict(long)方法

![1596551667630](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596551667630.png)

![1596551749494](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596551749494.png)

```java
// 判断是否已经触发了自我保护机制，如果触发就不再剔除过期服务
if (!isLeaseExpirationEnabled())
// 判断具体的微服务是否过期（此处就出现了上面介绍的bug）
if (lease.isExpired(additionalLeaseMs) && lease.getHolder() != null)
// 本地存在的所有的微服务数量
int registrySize = (int) getLocalRegistrySize();
// 自我保护机制阈值
int registrySizeThreshold = (int) (registrySize * serverConfig.getRenewalPercentThreshold());
//在不触发自我保护机制情况下，可以剔除的最大服务数量
int evictionLimit = registrySize - registrySizeThreshold;
//找到最小值
int toEvict = Math.min(expiredLeases.size(), evictionLimit);
//随机剔除
Random random = new Random(System.currentTimeMillis());

此处为什么计算最小值?
    eureka存在自我保护机制，默认阈值为85%，也就是说15分钟内超过15%节点都没有正常心跳，就不会再剔除服务了，所以此处需要判断过期的服务数量，是否大于15%，如果大于15%，那么只会剔除15%的服务。
此处为什么需要随机剔除?
    主要是高可用的一种体现。
    例如：现在eureka服务端中有7个微服务，分为2个微服务组。
    order:order1 order2 order3
    inventory:inventory1 inventory2 inventory3 inventory4
    加入现在服务端找到order1 order2 order3 inventory1需要剔除，此时剔除的值已经大于15%，所以按照15%来剔除，此处随机就可以最大程度保证单个微服务组不会在一次全部剔除完。
```







#### 集群同步

集群同步一定是eureka服务端发起的，此处只举例服务注册，当一个eureka客户端发送到某一个eureka服务端服务注册请求，eureka服务端注册完成后，就会执行集群同步方法。

集群同步的原理其实很简单，例如：客户端服务注册的请求为：localhost:XXX/eureka/register.do，那么eureka服务端同样会发送此请求到其他的eureka服务端。

唯一不同的是其中一个参数：isReplication 是否是集群同步请求

![1596340149474](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596340149474.png)



当一个eureka服务端开始集群同步操作时，虽然会发送同样的请求到其他eureka服务端，但是会在请求的请求头中加入isReplication表明此请求是一个集群同步请求，当其他eureka服务端接收到此请求，将注册信息注册到gMap，同样调用集群同步时，根据此参数判断，如果是集群同步请求就直接return，避免了死循环。

```
//服务注册完成后，集群同步方法
private void replicateToPeers(Action action, String appName, String id,
                                  InstanceInfo info /* optional */,
                                  InstanceStatus newStatus /* optional */, boolean isReplication) {
        Stopwatch tracer = action.getTimer().start();
        try {
            if (isReplication) {
                numberOfReplicationsLastMin.increment();
            }
            //此处判断如果配置的eureka服务端为空，或者此请求是集群同步请求，直接return，避免了死循环
            if (peerEurekaNodes == Collections.EMPTY_LIST || isReplication) {
                return;
            }
			
			//拿到配置的所有的eureka服务端信息
            for (final PeerEurekaNode node : peerEurekaNodes.getPeerEurekaNodes()) {
                // 剔除自身
                if (peerEurekaNodes.isThisMyUrl(node.getServiceUrl())) {
                    continue;
                
                //发送相同的请求到其他eureka服务端，进行集群同步
                replicateInstanceActionsToPeers(action, appName, id, info, newStatus, node);
            }
        } finally {
            tracer.stop();
        }
    }
```



#### 自我保护机制

**自我保护机制：**服务端内部维护一个定时任务每15分钟内检查一遍，当最近一分钟保持正常心跳的服务小于85%时，启动自我保护

**自我保护机制阈值的更新：**在服务注册，服务下架，服务端初始化，以及服务端每隔15分钟自动检查时阈值会更新

1. 例如在服务注册时，当服务添加到ConcurrentHashMap中后，先更新客户端数量expectedNumberOfClientsSendingRenews，然后根据算法算出最新的自我保护机制阈值numberOfRenewsPerMinThreshold。

![1596790057851](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596790057851.png)



自我保护机制阈值的算法：预估心跳值(所有注册上来的实例) * 每分钟触发的心跳连接次数(60s / 服务端每分钟心跳连接刷新时间(默认30s) * 自我保护机制的触发百分比(85%))



**注意：**

1. 此处的心跳续约的刷新时间取的是服务端的配置，而不是客户端的配置，所以如果想让自我保护机制正常运行，需要客户端的每分钟心跳连接次数与服务端配置相同。
2. 此处使用60s / 服务端每分钟心跳连接刷新时间 是因为此处的计算单位为分钟，而心跳续约的刷新时间单位为秒



![1596790261225](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596790261225.png)



2. 服务端内部维护定时任务，每隔15分钟触发一次，判断最近一分钟之内，心跳连接的数量是否小于自我保护机制的阈值。

定时任务启动调用栈：

```
	com.netflix.eureka.DefaultEurekaServerContext#initialize
	com.netflix.eureka.registry.PeerAwareInstanceRegistryImpl#init
com.netflix.eureka.registry.PeerAwareInstanceRegistryImpl#scheduleRenewalThresholdUpdateTask
```

**自我保护机制触发：**

服务剔除时，触发判断。

com.netflix.eureka.registry.AbstractInstanceRegistry#evict(long) 

![1596792905867](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596792905867.png)



服务端缓存架构

三层缓存，读写分离架构

​	readOnlyMap 只读缓存

​	Guava 读写缓存

​	registry 真实数据

正常情况下registry 是一个ConcurrentHashMap,他是不支持读写分离的

这种缓存三层架构的方式可以让他支持读写分离

为什么需要三层缓存架构

因为如果只有真实缓存的话，读写操作是会冲突的，也就是会有锁冲突，在写时是不能读的，

这种三层缓存架构可以将读写操作分离开来，也就避免了频繁的读写导致的锁冲突，大大提高了效率





### Eureka Client 源码

#### 配置生效

在spring-cloud-netflix-eureka-client-2.2.3.RELEASE.jar中的META-INF/spring.factories，springboot自动配置中注入了一个EurekaClientAutoConfiguration客户端的自动配置类，在此类中向spring boot 容器中注入了一个EurekaClient类，用来初始化客户端。

重要的属性：

```
config.shouldRegisterWithEureka() 客户端是否开启服务注册功能
config.shouldFetchRegistry() 客户端是否开启服务发现功能
clientConfig.shouldEnforceRegistrationAtInit() 客户端初始化时是否应该强制初始注册
clientConfig.getRegistryFetchIntervalSeconds() 客户端服务发现定时任务执行间隔 默认30s
renewalIntervalInSecs 心跳续约间隔时间 默认30s
HeartbeatThread.class 具体心跳续约的逻辑 
scheduler 调度任务，管理心跳续约以及拉取注册信息的任务
heartbeatExecutor 客户端心跳续约线程池
cacheRefreshExecutor 客户端拉取注册信息线程池
cacheRefreshTask 客户端拉取注册信息的具体任务
heartbeatTask 客户端心跳续约的具体任务

```

client初始化主要的逻辑在com.netflix.discovery.DiscoveryClient#DiscoveryClient(com.netflix.appinfo.ApplicationInfoManager, com.netflix.discovery.EurekaClientConfig, com.netflix.discovery.AbstractDiscoveryClientOptionalArgs, javax.inject.Provider<com.netflix.discovery.BackupRegistry>, com.netflix.discovery.shared.resolver.EndpointRandomizer)

```java
//其中373行，此处判断是否开启了服务注册与服务发现功能，如果没开启就没必要接着初始化了直接return
if (!config.shouldRegisterWithEureka() && !config.shouldFetchRegistry()) 



//397-419行，初始化任务调度器以及两个任务线程池
    
scheduler = Executors.newScheduledThreadPool(2,
                    new ThreadFactoryBuilder()
                            .setNameFormat("DiscoveryClient-%d")
                            .setDaemon(true)
                            .build());

            heartbeatExecutor = new ThreadPoolExecutor(
                    1, clientConfig.getHeartbeatExecutorThreadPoolSize(), 0, TimeUnit.SECONDS,
                    new SynchronousQueue<Runnable>(),
                    new ThreadFactoryBuilder()
                            .setNameFormat("DiscoveryClient-HeartbeatExecutor-%d")
                            .setDaemon(true)
                            .build()
            );  // use direct handoff

            cacheRefreshExecutor = new ThreadPoolExecutor(
                    1, clientConfig.getCacheRefreshExecutorThreadPoolSize(), 0, TimeUnit.SECONDS,
                    new SynchronousQueue<Runnable>(),
                    new ThreadFactoryBuilder()
                            .setNameFormat("DiscoveryClient-CacheRefreshExecutor-%d")
                            .setDaemon(true)
                            .build()
            );  // use direct handoff


//clientConfig.shouldFetchRegistry() 是否开启服务发现，根据配置文件
//fetchRegistry(false) 此方法是一个很重要的方法，客户端服务发现的具体逻辑，此处判断去服务端是否能拿到，
//如果拿不到，从备份注册表中获取注册表信息，如果所有eureka服务器无法访问url。
if (clientConfig.shouldFetchRegistry() && !fetchRegistry(false)) {
    //从备份注册表中获取注册表信息，如果所有eureka服务器无法访问url。
    fetchRegistryFromBackup();
}

//459行 初始化具体的异步任务 cacheRefreshTask heartbeatTask
 initScheduledTasks();


```



#### 服务注册

目前发现在两个地方进行服务注册。

1. 在eureka client初始化时，根据clientConfig.shouldEnforceRegistrationAtInit()配置，注册
2. 在心跳续约时，如果服务端返回404，就去注册

#### 心跳续约

在客户端初始化时，com.netflix.discovery.DiscoveryClient#initScheduledTasks方法，初始化两个异步任务，分别是心跳续约和服务发现。



在下面的截图中，eureka客户端初始化了心跳续约任务

![1596983200284](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596983200284.png)



具体的逻辑在com.netflix.discovery.DiscoveryClient#renew方法，此方法就是发送了一个http请求到服务端。在客户端调用此方法，发送心跳续约请求后，流程就回到了上面介绍的eureka server心跳续约的介绍。

![1596983565983](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596984249171.png)



**注意：**

此处如果服务端返回的状态码为404，则调用服务注册方法，将此微服务注册进eureka server中去。

#### 服务下架

客户端服务安全下架有两种方式：

1. 当EurekaClient这个Bean销毁时，自动执行其中的shutdown方法，此为被动调用

```
在EurekaClientAutoConfiguration自动配置类，配置EurekaClient这个Bean时，在@Bean注解中加入了destroyMethod属性
@Bean(destroyMethod = "shutdown")
表示当此Bean在注销时，会执行此方法
```



1. 手动调用EurekaClient的shutdown

```
注入EurekaClient并手动调用shudown方法或者使用DiscoveryManager.shutdownComponent()方法，此方法其实也是调用了EurekaClient的shutdown方法
```



#### 服务发现

服务发现在两个地方调用，一个在客户端初始化时调用，一个在客户端初始化时，初始化的定时任务中定时调用。

1. 客户端初始化调用：com.netflix.discovery.DiscoveryClient#DiscoveryClient(com.netflix.appinfo.ApplicationInfoManager, com.netflix.discovery.EurekaClientConfig, com.netflix.discovery.AbstractDiscoveryClientOptionalArgs, javax.inject.Provider<com.netflix.discovery.BackupRegistry>, com.netflix.discovery.shared.resolver.EndpointRandomizer)的438行

```java
 if (clientConfig.shouldFetchRegistry() && !fetchRegistry(false)) {
            fetchRegistryFromBackup();
  }
```



2. 定时任务调用：

   com.netflix.discovery.DiscoveryClient#initScheduledTasks的cacheRefreshTask任务

![1596984249171](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596984249171.png)



此定时任务默认30s执行一次





不同类型的服务发现调用的同一个方法com.netflix.discovery.DiscoveryClient#fetchRegistry

服务发现分为两种类型：**增量发现，全量发现**

##### 增量拉取

![1596984545744](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596984545744.png)

```java
//客户端是否配置了禁用增量拉取
clientConfig.shouldDisableDelta() 
//客户端是否配置了VIP地址 例如：A B C 服务，如果A配置了只拉取B
(!Strings.isNullOrEmpty(clientConfig.getRegistryRefreshSingleVipAddress())) 
//是否强制获取全量数据
forceFullRegistryFetch
//本地缓存为空
(applications == null)
//本地缓存为空
(applications.getRegisteredApplications().size() == 0)
//本地缓存为空
(applications.getVersion() == -1)
```

**增量拉取默认会拉取服务端最近3分钟的注册信息**

服务端如何保证增量数据拉取到的是最近3分钟的呢?

```
在服务端维护了一个队列，只要有服务注册，服务下架，心跳续约等操作，都会放入此队列,有一个定时任务，默认30s执行一次，定时清除此队列中超过3分钟的服务，保证此队列存在的数据始终为最近3分钟的服务信息
```

增量数据拉取的具体逻辑：com.netflix.discovery.DiscoveryClient#getAndUpdateDelta

![1596985240414](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596985240414.png)



![1596985559865](https://lxkimages.oss-cn-beijing.aliyuncs.com/img/1596985559865.png)



```
增量的数据获取逻辑：
 1. 发送请求去服务端获取最近3分钟的增量数据（为空则去拉取全量数据）
 2. 更新本地的缓存
 3. 拿到本地更新过的缓存数据的hashCode
 4. 将本地的hashCode与服务端返回的hashCode比较，不同则表示客户端缓存的服务信息与服务端不相符，去拉取全量的数据（此处虽然拉取的是增量的数据，但是服务端返回的hashCode是全量数据的hashCode）
```



##### 全量拉取

全量数据的拉取与增量数据的拉取类似，不同的是调用的方法不一样com.netflix.discovery.DiscoveryClient#getAndStoreFullRegistry







## 对于eureka的保留问题

eureka中，客户端默认每30秒访问一个eureka服务端，而服务端每90秒没有感应到客户端的访问就认为该实例不可用。这样，如果一个实例挂了，别的实例可能要过90秒才知道该服务不可用，用户就有90秒的时间可能出错。我认为这不可接受，为什么不能用长连接呢，用nio的方式一直连接，也不会消耗多大的资源。



虽然是默认90秒才能知道一个实例挂了,但是调用实例的方法可以设置超时方法哦,如果调用方法时超时,就会调用设置好的超时方法,返回一个默认的结果,而且eureka可以设置规则,多次超时就不调用这个实例了
因此,其实eureka是在某个实例挂了之后立马能做出反应的

过期时间每次加  duration秒

客户端心跳连接间隔：30s

服务端剔除时默认的等待时间：90s
