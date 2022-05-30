(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{581:function(a,s,t){"use strict";t.r(s);var e=t(22),r=Object(e.a)({},(function(){var a=this,s=a.$createElement,t=a._self._c||s;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("h1",{attrs:{id:"seata-1-2-0-相关"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#seata-1-2-0-相关"}},[a._v("#")]),a._v(" Seata 1.2.0 相关")]),a._v(" "),t("h2",{attrs:{id:"_1-seata-源码流程图"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-seata-源码流程图"}},[a._v("#")]),a._v(" 1. seata 源码流程图")]),a._v(" "),t("p",[t("img",{attrs:{src:"https://lxkimages.oss-cn-beijing.aliyuncs.com/img/seata%E6%BA%90%E7%A0%81%E6%B5%81%E7%A8%8B%E5%9B%BE.png",alt:"seata源码流程图"}})]),a._v(" "),t("h3",{attrs:{id:"_1-1-seata如何与spring整合"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-seata如何与spring整合"}},[a._v("#")]),a._v(" 1.1 seata如何与spring整合")]),a._v(" "),t("p",[a._v("seata核心为代理数据源与aop拦截方法")]),a._v(" "),t("p",[a._v("代理数据源：")]),a._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@EnableAutoDataSourceProxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[a._v("@Import")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AutoDataSourceProxyRegistrar")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("AutoDataSourceProxyRegistrar")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" \n向spring容器注册一个"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("BeanDefinition")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SeataAutoDataSourceProxyCreator")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("SeataAutoDataSourceProxyAdvice")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("->")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("DataSourceProxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("ConnectionProxy")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//代理连接")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("StatementProxy")]),a._v("  "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("--")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//代理Statement")]),a._v("\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br"),t("span",{staticClass:"line-number"},[a._v("6")]),t("br"),t("span",{staticClass:"line-number"},[a._v("7")]),t("br"),t("span",{staticClass:"line-number"},[a._v("8")]),t("br")])]),t("p",[a._v("拦截方法：")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("seata-spring-boot-starter ----\x3e\nresources/META-INF/spring.factories/SeataAutoConfiguration ---\x3e\n@Bean GlobalTransactionScanner\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br")])]),t("p",[a._v("分别对应两大块")]),a._v(" "),t("p",[a._v("GlobalTransactionScanner")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("全局事务扫描器\n实现了AbstractAutoProxyCreator类，重写了wrapIfNecessary()方法，在spring初始化时，会回调wrapIfNecessary()方法。\nwrapIfNecessary方法执行的操作：\n\t专门给类(类中有方法添加了@GlobalTransactional或@GlobalLock注解)生成代理对象,在真正执行目标方法前，做一些自己的事情(开启全局事务。。。)\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br")])]),t("p",[a._v("DataSourceProxy")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("AutoDataSourceProxyRegistrar  ----》 向spring容器注册一个BeanDefinition[ Class : SeataAutoDataSourceProxyCreator]\n\nSeataAutoDataSourceProxyCreator ----》SeataAutoDataSourceProxyAdvice  -----》DataSourceProxy ----》ConnectionProxy ----》StatementProxy\n\n代理数据源，将DataSource，jdbc的Connection,Statement全部代理，在执行真正的crud之前，做一些自己的操作（前置镜像，后置镜像，分支事务，UndoLog操作，最后提交）\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br"),t("span",{staticClass:"line-number"},[a._v("3")]),t("br"),t("span",{staticClass:"line-number"},[a._v("4")]),t("br"),t("span",{staticClass:"line-number"},[a._v("5")]),t("br")])]),t("h3",{attrs:{id:"_1-2-seata应用"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-seata应用"}},[a._v("#")]),a._v(" 1.2 seata应用")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("seata分布式事务隔离性：默认读已提交")])]),a._v(" "),t("li",[t("p",[a._v("seata分布式事务与本地事务发生脏写：过程：分布式事务第一阶段结束，释放本地锁后，另一个本地事务写数据")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("发生本地事务的方法添加@GlobalLock或@GlobalTransactional\n建议添加@GlobalLock,因为@@GlobalLock只去检查要操作的数据是否有全局锁，减少了与服务端请求的次数\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br"),t("span",{staticClass:"line-number"},[a._v("2")]),t("br")])])]),a._v(" "),t("li",[t("p",[a._v("seata分布式事务与本地事务发生脏读：过程：分布式事务第一阶段结束，释放本地锁后，另一个本地事务读数据")]),a._v(" "),t("div",{staticClass:"language- line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[a._v("发生本地事务的方法添加@GlobalTransactional注解，并且查询语句后面加for update\n")])]),a._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[a._v("1")]),t("br")])])])]),a._v(" "),t("h3",{attrs:{id:"_1-3-遇到的问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-遇到的问题"}},[a._v("#")]),a._v(" 1.3 遇到的问题")]),a._v(" "),t("ol",[t("li",[t("p",[a._v("事务发起方加了@GlobalTransactional注解，当这两条sql(本地sql与远程sql)都调用成功，做最终提交的时候，服务端如何向两个服务发送删除undoLog表数据请求？")]),a._v(" "),t("p",[a._v("发生的场景：\norderDao.updateNumber(id);\nstockApi.remoteUpdate(id);(远程调用)")]),a._v(" "),t("p",[a._v("问题解答：")]),a._v(" "),t("p",[a._v("​\t\t服务端做最终提交时，根据全局事务查询其下的全部分支事务，在循环分支事务时，根据分支事务的resourceId和clientId确定要给哪个客户端发送请求，让客户端删除undoLog表数据。")])])])])}),[],!1,null,null,null);s.default=r.exports}}]);