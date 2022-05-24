---
title: Git操作
date: 2022-05-21 19:03:43
permalink: /pages/5a4e77/
sidebar: auto
categories:
  - 随笔
tags:
  - 
author: 
  name: luxiaokai
  link: https://github.com/luxiaokai
---
**托管中心**`维护远程库`

 - **内网：可以自己搭建一个GitLab服务器**
- **外网：可以使用码云、Github**

**版本控制工具**

- **集中式**：CSV ,**SVN**,VSS
- **分布式**：**Git**，Darcs,...

**下载地址**：https://git-scm.com/downloads

## Git命令行操作

### 1.1本地库初始化

`进入文件夹`

```
git init
注意：生成的 .git 目录中存放的是本地库相关文件，不要删除
```

### 1.2设置签名

- 项目(仓库)级别`仅在当前本地库有效`

    ```
    git config user.name tom  #设置用户名tom
    git config user.email liu@qq.com #设置用户邮箱
    说明：存放此签名的位置在仓库的.git/config文件
    ```

- 系统用户级别`仅在当前登录的操作系统用户有效`

  ```
  git config --global user.name tom
  git config --global user.email liu@qq.com
  说明：存放此签名的位置在cd ~ cat /.gitconfig 
  ```

> 仅仅加了一个 `--global`
>
> 优先级别：`项目级别`  >  `系统级别`
>
> 信息保存位置：` ~/.gitconfig 文件 `   

### 1.3基本操作

#### 1.3.1 状态查看

```
git status   #查看工作区、暂存区状态
```

#### 1.3.2 添加/撤回

```
git add fileName  #指定文件
git add . #所有
说明：将工作区的文件添加到暂存区
git rm --cached fileName #指定文件
说明：将暂存区中指定文件撤回到工作区
```

#### 1.3.3 提交

```
git commit -m 'commit message' fileName
说明：将暂存区内容提交到本地库
```

#### 1.3.4 查看历史记录

```
git log 
git reflog  #常用
git log --greph #图形显示,更直观
git log --pretty=oneline #漂亮一行显示
git log --oneline #简洁显示
说明：HEAD@{移动到当前版本需要多少步}
```

#### 1.3.5 前进后退版本

- 基于索引值`推荐`

  ```
  git reset --hard 指针位置
  例子：git reset --hard a6ace91 #回到这个状态
  ```

- 使用 **^** 符号`只能后退`

  ```
  git reset --hard HEAD^
  例子：git reset --hard HEAD^^
  注意：几个 ^ 表示后退几步
  ```

- 使用 **~** 符号`只能后退`

  ```
  git reset --hard HEAD~n
  例子：git reset --hard HEAD~3
  ```

#### 1.3.6 reset的三个参数比较

```
soft: 
  - 仅本地库移动HEAD 指针
mixed:
  - 在本地库移动HEAD指针
  - 重置暂存区
hard:
  - 在本地库移动HEAD指针
  - 重置暂存区
  - 重置工作区
```

#### 1.3.7　删除文件并找回

- **相当于建立一个快照，虽然删除了，但只要添加到暂存区，就能找回**

~~~
rm fileName 删除工作区某个文件
git add fileName 删除文件的操作提交到暂存区
git commit -m "delete fileName" 删除操作提交到本地库
git reset --hard 指针位置 找回
~~~

#### 1.3.8 文件差异比较

```
git diff 文件名    #和暂存区中的文件进行比较
git diff 哈希值 文件名  #和本地库中的一个版本比较
git diff  #不带文件名，则比较多个文件
```

### 2.2 分支管理

`hot_fix` `master` `feature_x` `feature_y`

#### 2.2.1 什么是分支管理

- 在版本控制中，同一个项目，推进多个任务

#### 2.2.2 分支的好处

- 同时并行推进多个功能开发，提高开发效率
- 某一分支开发失败，不会对其它分支有任何影响

#### 2.2.3 分支操作

- 创建分支

~~~
git branch 分支名
~~~

- 查看分支

~~~
git branch
git branch -v 
~~~

- 切换分支

~~~
git checkout 分支名
git checkout -b 分支名   #创建分支并直接切换到该分支
~~~

- 合并分支`相当于把修改了的文件拉过来`

~~~
git merge branchName
注意：合并分支的时候要明确谁谁合并
	我在a分支里面修改了。要合并到master，就先切换到master，然后合并a
~~~

- 删除分支

~~~
git branch -d 分支名
~~~

- 查看远程仓库的分支情况

```
git branch -a 
```

```
第一次clone下来的代码(如果不指定分支)都是master节点的
如果想切换到其他分支节点：

-- 查看远程仓库所有分支节点
git branch -a 

--远程分支名 origin/本地分支名  --新建本地分支，并将远程分支迁到本地
git checkout -b 

--切换到本地分支
git checkout 本地分支  
```



#### 2.2.4 解决冲突

- 冲突的表现
- <img src="C:\Users\18939\AppData\Roaming\Typora\typora-user-images\image-20200209202344357.png" alt="image-20200209202344357" style="zoom: 67%;" />
- 冲突的解决
  - 第一步：编辑，删除特殊标记`<<<` `===`
  - 第二步：修改到满意位置，保存退出
  - 第三步：添加到缓存区  `git  add 文件名`
  - 第四步：提交到本地库`git commit -m '日志信息' `  `注意：后面一定不能带文件名`

## Git 结合Github

`别分手`  `别名 分支名`

#### 1.1 创建远程库地址别名

~~~
git remote add 别名 远程地址 #一般别名为origin,此命令用来本地库和远程库建立关联
git remote -v  #查看远程地址别名
例子：git remote add origin https://xx
~~~

#### 1.2 推送

`开发修改完把本地库的文件推送到远程仓库` `前提是提交到了本地库才可以推送`

~~~
git push 别名 分支名
git push -u 别名 分支名    #-u指定默认主机
例子：git push origin master
~~~

#### 1.3 克隆D:\GeorSoft\bras\WebContent

`完整的把远程库克隆到本地`  `创建origin远程地址别名` `初始化本地库`

~~~
git clone  远程地址
例子：git clone https://xx

指定分支克隆
git clone -b 分支名 https:xx  -b表示要从分支下载
~~~

#### 1.4 拉取

  `本地存在clone下来的文件  就用pull更新`  

```
pull = fetch + merge
	git fetch 别名 分支名
	git merge 别名 分支名
git pull 别名 分支名
```

#### 1.5 解决冲突

`注意：解决冲突后的提交是不能带文件名的`

`如果不是基于远程库最新版做的修改不能推送，必须先pull下来安装冲突办法解决`

#### 1.6 rebase

```
git rebase -i 索引号
git rebase -i HEAD~3  #合并最近三条记录
说明：在vim编辑里面改成s
```

#### 1.7 beyond compare 

`用软件解决冲突` 

 ```
1.安装 ：
	beyond compare 
2.配置：
    git config --local merge.tool bc3  #合并名称
    git config --local mergetool.path '/usr/local/bin/bcomp' #软件路径
    git config --local mergetool.keepBackup false  #False不用保存备份
3.应用：
	git mergetool
说明：--local指只在当前操作系统有效
 ```

#### 1.8 跨团队合作

- **同一个团队**

  **邀请成员**:`Settings` --> `Collaborators` -->`填写用户名` -->`打开链接接受邀请``

- **给团队以外的人共享代码并合并他提交的代码**

    `组织做review`  `通过Pull request`
    
    **团队以外的人**：
    
    `点击别人仓库的fork 到自己的仓库`   -- > `然后clone下来 修改后推送到远程库`  --> `点击Pull Request请求` --> `Create pull request发消息`
    
    **仓库管理者**：
    
    `点击Pull Requests --> Files changed 审核代码后  --> Merge pull request --> 填写提交日志 --> Confirm merge`

#### 1.9 Tag标签

`为了清晰的版本管理，公司一般不会直接使用commit提交`

```
git tag -a v1.0 -m '版本介绍'   #创建本地tag信息
git tag -d v1.0    		#删除tag
git push origin --tags   #将本地tag信息推送到远程库
git pull origin --tags    #拉取到本地

git checkout v.10    #切换tag
git clone -b v0.1 地址   #指定tag下载代码
```



#### 1.10 SSH 免密登录

- 输入:`ssh-keygen -t rsa -C GitHub邮箱地址`  
- 进入`.ssh`目录，复制`id_rsa.pub`文件内容
- 登录GitHub。`Settings`  --> `SSH and GPG keys ` --> `New SSH Key    `
- 回到git通过ssh地址创建。`git remote add 别名 SSH地址  `

## Git工作流

#### 1.1 概念

```
在项目开发过程中使用Git的方式
```

#### 1.2 分类

##### 1.2.1 集中式工作流

```
像SVN一样，集中式工作流有一个中央仓库，所有的修改都提交到了Master分支上
```

##### 1.2.2 GitFlow工作流 

主干分支`master`  开发分支`develop`  修复分支`hotfix`   预发布分支`release`  功能分支`feature`

```
GitFlow 有独立的分支，让发布迭代过程更流畅。
```

##### 1.2.3 Forking 工作流    

```
在 GitFlow 基础上， 充分利用了 Git 的 Fork 和 pull request 的功能以达到代码审核的目的。 
安全可靠地管理大团队的开发者
```

## Eclipse使用Git管理项目

#### 1.1 本地项目使用Git

##### 1.1.1 git配置

```
Window --> Preferences --> Team --> Git --> Configuration --> User Settings(全局配置)/Repository Settings(单独项目配置)
```

##### 1.1.2 git提交忽略

 https://github.com/github/gitignore 

```
不同语言对应的git忽略模板，放在用户根目录，并在.gitconfig全局配置文件中加入
[core]
	excludesfile = C:/Users/LXK/java.gitignore #必须为正斜线/
```

##### 1.1.3 本地项目使用git管理

-  将项目初始化为本地库

```
项目右键 --> Team --> Share project --> Git --> Use or create repository in parent folder of project --> Create Repository
```

- 项目提交到暂存区

```
项目右键 --> Team --> Add to Index
```

- 项目提交到本地库

```
项目右键 --> Team --> Commit...
```

- 本地库关联远程库

```
项目右键 --> Team --> Remote --> Push...
```

- 提交到远程库

```
项目右键 --> Team --> Remote --> Push...
```

- 远程拉取代码

```
项目右键 --> Team --> Pull
```

- 解决远程库与本地库冲突

```
先把远程代码拉取下来 --> Team --> Merge(合并)... --> 对比本地库与远程库的区别 --> 人工具体解决冲突 --> 提交
```



##### 1.1.4 Eclipse导入Git项目

```
右键 --> Import... --> Git --> Projects from Git --> Clone URI --> 填写远程库地址、用户名/密码、导入本地路径。。。
```



## 内网搭建GitLab服务器

##### 1.1 安装命令

```
yum install -y curl policycoreutils-python openssh-server openssh-clients	#安装依赖包
systemctl enable sshd	#开机启动sshd
systemctl start sshd	#开机启动sshd
curl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | bash									#安装Gitlab-ce 社区版
yum install -y gitlab-ce.x86_64		  #安装Gitlab-ce 社区版
rpm -qa gitlab-ce					  #安装Gitlab-ce 社区版
vim /etc/gitlab/gitlab.rb			  #此处修改下图中的external_url地址
gitlab-ctl reconfigure				  #加载配置，使gitlab配置生效
gitlab-ctl start					  #开启gitlab
systemctl enable gitlab-runsvdir	  #开机启动
systemctl status gitlab-runsvdir	  #开机启动
```

![image-20200210175557968](C:\Users\18939\AppData\Roaming\Typora\typora-user-images\image-20200210175557968.png)

##### 1.2 访问 GitLab页面

 http://192.168.0.107 (你的ip地址)

##### 1.3 注意

GitLab启动后，可能需要几分钟的时间，在此时间段内访问会502，正常。



## 遇到的问题

在idea中使用git管理项目，如果update project，会把本地未commit的代码覆盖。

