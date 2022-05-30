(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{579:function(s,a,e){"use strict";e.r(a);var t=e(22),r=Object(t.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("p",[e("strong",[s._v("托管中心")]),e("code",[s._v("维护远程库")])]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("内网：可以自己搭建一个GitLab服务器")])]),s._v(" "),e("li",[e("strong",[s._v("外网：可以使用码云、Github")])])]),s._v(" "),e("p",[e("strong",[s._v("版本控制工具")])]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("集中式")]),s._v("：CSV ,"),e("strong",[s._v("SVN")]),s._v(",VSS")]),s._v(" "),e("li",[e("strong",[s._v("分布式")]),s._v("："),e("strong",[s._v("Git")]),s._v("，Darcs,...")])]),s._v(" "),e("p",[e("strong",[s._v("下载地址")]),s._v("：https://git-scm.com/downloads")]),s._v(" "),e("h2",{attrs:{id:"git命令行操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git命令行操作"}},[s._v("#")]),s._v(" Git命令行操作")]),s._v(" "),e("h3",{attrs:{id:"_1-1本地库初始化"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1本地库初始化"}},[s._v("#")]),s._v(" 1.1本地库初始化")]),s._v(" "),e("p",[e("code",[s._v("进入文件夹")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git init\n注意：生成的 .git 目录中存放的是本地库相关文件，不要删除\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h3",{attrs:{id:"_1-2设置签名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2设置签名"}},[s._v("#")]),s._v(" 1.2设置签名")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("项目(仓库)级别"),e("code",[s._v("仅在当前本地库有效")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git config user.name tom  #设置用户名tom\ngit config user.email liu@qq.com #设置用户邮箱\n说明：存放此签名的位置在仓库的.git/config文件\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("系统用户级别"),e("code",[s._v("仅在当前登录的操作系统用户有效")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git config --global user.name tom\ngit config --global user.email liu@qq.com\n说明：存放此签名的位置在cd ~ cat /.gitconfig \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])])]),s._v(" "),e("blockquote",[e("p",[s._v("仅仅加了一个 "),e("code",[s._v("--global")])]),s._v(" "),e("p",[s._v("优先级别："),e("code",[s._v("项目级别")]),s._v("  >  "),e("code",[s._v("系统级别")])]),s._v(" "),e("p",[s._v("信息保存位置："),e("code",[s._v("~/.gitconfig 文件")])])]),s._v(" "),e("h3",{attrs:{id:"_1-3基本操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3基本操作"}},[s._v("#")]),s._v(" 1.3基本操作")]),s._v(" "),e("h4",{attrs:{id:"_1-3-1-状态查看"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-1-状态查看"}},[s._v("#")]),s._v(" 1.3.1 状态查看")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git status   #查看工作区、暂存区状态\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_1-3-2-添加-撤回"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-2-添加-撤回"}},[s._v("#")]),s._v(" 1.3.2 添加/撤回")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git add fileName  #指定文件\ngit add . #所有\n说明：将工作区的文件添加到暂存区\ngit rm --cached fileName #指定文件\n说明：将暂存区中指定文件撤回到工作区\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h4",{attrs:{id:"_1-3-3-提交"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-3-提交"}},[s._v("#")]),s._v(" 1.3.3 提交")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git commit -m 'commit message' fileName\n说明：将暂存区内容提交到本地库\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h4",{attrs:{id:"_1-3-4-查看历史记录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-4-查看历史记录"}},[s._v("#")]),s._v(" 1.3.4 查看历史记录")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git log \ngit reflog  #常用\ngit log --greph #图形显示,更直观\ngit log --pretty=oneline #漂亮一行显示\ngit log --oneline #简洁显示\n说明：HEAD@{移动到当前版本需要多少步}\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h4",{attrs:{id:"_1-3-5-前进后退版本"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-5-前进后退版本"}},[s._v("#")]),s._v(" 1.3.5 前进后退版本")]),s._v(" "),e("ul",[e("li",[e("p",[s._v("基于索引值"),e("code",[s._v("推荐")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git reset --hard 指针位置\n例子：git reset --hard a6ace91 #回到这个状态\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("使用 "),e("strong",[s._v("^")]),s._v(" 符号"),e("code",[s._v("只能后退")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git reset --hard HEAD^\n例子：git reset --hard HEAD^^\n注意：几个 ^ 表示后退几步\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])])]),s._v(" "),e("li",[e("p",[s._v("使用 "),e("strong",[s._v("~")]),s._v(" 符号"),e("code",[s._v("只能后退")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git reset --hard HEAD~n\n例子：git reset --hard HEAD~3\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])])])]),s._v(" "),e("h4",{attrs:{id:"_1-3-6-reset的三个参数比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-6-reset的三个参数比较"}},[s._v("#")]),s._v(" 1.3.6 reset的三个参数比较")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("soft: \n  - 仅本地库移动HEAD 指针\nmixed:\n  - 在本地库移动HEAD指针\n  - 重置暂存区\nhard:\n  - 在本地库移动HEAD指针\n  - 重置暂存区\n  - 重置工作区\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h4",{attrs:{id:"_1-3-7-删除文件并找回"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-7-删除文件并找回"}},[s._v("#")]),s._v(" 1.3.7　删除文件并找回")]),s._v(" "),e("ul",[e("li",[e("strong",[s._v("相当于建立一个快照，虽然删除了，但只要添加到暂存区，就能找回")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v('rm fileName 删除工作区某个文件\ngit add fileName 删除文件的操作提交到暂存区\ngit commit -m "delete fileName" 删除操作提交到本地库\ngit reset --hard 指针位置 找回\n')])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"_1-3-8-文件差异比较"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-8-文件差异比较"}},[s._v("#")]),s._v(" 1.3.8 文件差异比较")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git diff 文件名    #和暂存区中的文件进行比较\ngit diff 哈希值 文件名  #和本地库中的一个版本比较\ngit diff  #不带文件名，则比较多个文件\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h3",{attrs:{id:"_2-2-分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-分支管理"}},[s._v("#")]),s._v(" 2.2 分支管理")]),s._v(" "),e("p",[e("code",[s._v("hot_fix")]),s._v(" "),e("code",[s._v("master")]),s._v(" "),e("code",[s._v("feature_x")]),s._v(" "),e("code",[s._v("feature_y")])]),s._v(" "),e("h4",{attrs:{id:"_2-2-1-什么是分支管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-1-什么是分支管理"}},[s._v("#")]),s._v(" 2.2.1 什么是分支管理")]),s._v(" "),e("ul",[e("li",[s._v("在版本控制中，同一个项目，推进多个任务")])]),s._v(" "),e("h4",{attrs:{id:"_2-2-2-分支的好处"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-2-分支的好处"}},[s._v("#")]),s._v(" 2.2.2 分支的好处")]),s._v(" "),e("ul",[e("li",[s._v("同时并行推进多个功能开发，提高开发效率")]),s._v(" "),e("li",[s._v("某一分支开发失败，不会对其它分支有任何影响")])]),s._v(" "),e("h4",{attrs:{id:"_2-2-3-分支操作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-3-分支操作"}},[s._v("#")]),s._v(" 2.2.3 分支操作")]),s._v(" "),e("ul",[e("li",[s._v("创建分支")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git branch 分支名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("查看分支")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git branch\ngit branch -v \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("切换分支")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git checkout 分支名\ngit checkout -b 分支名   #创建分支并直接切换到该分支\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("ul",[e("li",[s._v("合并分支"),e("code",[s._v("相当于把修改了的文件拉过来")])])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git merge branchName\n注意：合并分支的时候要明确谁谁合并\n\t我在a分支里面修改了。要合并到master，就先切换到master，然后合并a\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("ul",[e("li",[s._v("删除分支")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git branch -d 分支名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("查看远程仓库的分支情况")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git branch -a \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("第一次clone下来的代码(如果不指定分支)都是master节点的\n如果想切换到其他分支节点：\n\n-- 查看远程仓库所有分支节点\ngit branch -a \n\n--远程分支名 origin/本地分支名  --新建本地分支，并将远程分支迁到本地\ngit checkout -b \n\n--切换到本地分支\ngit checkout 本地分支  \n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("h4",{attrs:{id:"_2-2-4-解决冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-4-解决冲突"}},[s._v("#")]),s._v(" 2.2.4 解决冲突")]),s._v(" "),e("ul",[e("li",[s._v("冲突的表现")]),s._v(" "),e("li",[e("img",{staticStyle:{zoom:"67%"},attrs:{src:"C:\\Users\\18939\\AppData\\Roaming\\Typora\\typora-user-images\\image-20200209202344357.png",alt:"image-20200209202344357"}})]),s._v(" "),e("li",[s._v("冲突的解决\n"),e("ul",[e("li",[s._v("第一步：编辑，删除特殊标记"),e("code",[s._v("<<<")]),s._v(" "),e("code",[s._v("===")])]),s._v(" "),e("li",[s._v("第二步：修改到满意位置，保存退出")]),s._v(" "),e("li",[s._v("第三步：添加到缓存区  "),e("code",[s._v("git add 文件名")])]),s._v(" "),e("li",[s._v("第四步：提交到本地库"),e("code",[s._v("git commit -m '日志信息'")]),s._v(" "),e("code",[s._v("注意：后面一定不能带文件名")])])])])]),s._v(" "),e("h2",{attrs:{id:"git-结合github"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git-结合github"}},[s._v("#")]),s._v(" Git 结合Github")]),s._v(" "),e("p",[e("code",[s._v("别分手")]),s._v(" "),e("code",[s._v("别名 分支名")])]),s._v(" "),e("h4",{attrs:{id:"_1-1-创建远程库地址别名"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-创建远程库地址别名"}},[s._v("#")]),s._v(" 1.1 创建远程库地址别名")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git remote add 别名 远程地址 #一般别名为origin,此命令用来本地库和远程库建立关联\ngit remote -v  #查看远程地址别名\n例子：git remote add origin https://xx\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"_1-2-推送"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-推送"}},[s._v("#")]),s._v(" 1.2 推送")]),s._v(" "),e("p",[e("code",[s._v("开发修改完把本地库的文件推送到远程仓库")]),s._v(" "),e("code",[s._v("前提是提交到了本地库才可以推送")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git push 别名 分支名\ngit push -u 别名 分支名    #-u指定默认主机\n例子：git push origin master\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"_1-3-克隆d-georsoft-bras-webcontent"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-克隆d-georsoft-bras-webcontent"}},[s._v("#")]),s._v(" 1.3 克隆D:\\GeorSoft\\bras\\WebContent")]),s._v(" "),e("p",[e("code",[s._v("完整的把远程库克隆到本地")]),s._v(" "),e("code",[s._v("创建origin远程地址别名")]),s._v(" "),e("code",[s._v("初始化本地库")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git clone  远程地址\n例子：git clone https://xx\n\n指定分支克隆\ngit clone -b 分支名 https:xx  -b表示要从分支下载\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br")])]),e("h4",{attrs:{id:"_1-4-拉取"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-4-拉取"}},[s._v("#")]),s._v(" 1.4 拉取")]),s._v(" "),e("p",[e("code",[s._v("本地存在clone下来的文件 就用pull更新")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("pull = fetch + merge\n\tgit fetch 别名 分支名\n\tgit merge 别名 分支名\ngit pull 别名 分支名\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("h4",{attrs:{id:"_1-5-解决冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-5-解决冲突"}},[s._v("#")]),s._v(" 1.5 解决冲突")]),s._v(" "),e("p",[e("code",[s._v("注意：解决冲突后的提交是不能带文件名的")])]),s._v(" "),e("p",[e("code",[s._v("如果不是基于远程库最新版做的修改不能推送，必须先pull下来安装冲突办法解决")])]),s._v(" "),e("h4",{attrs:{id:"_1-6-rebase"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-6-rebase"}},[s._v("#")]),s._v(" 1.6 rebase")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git rebase -i 索引号\ngit rebase -i HEAD~3  #合并最近三条记录\n说明：在vim编辑里面改成s\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h4",{attrs:{id:"_1-7-beyond-compare"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-7-beyond-compare"}},[s._v("#")]),s._v(" 1.7 beyond compare")]),s._v(" "),e("p",[e("code",[s._v("用软件解决冲突")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.安装 ：\n   beyond compare \n2.配置：\n   git config --local merge.tool bc3  #合并名称\n   git config --local mergetool.path '/usr/local/bin/bcomp' #软件路径\n   git config --local mergetool.keepBackup false  #False不用保存备份\n3.应用：\n   git mergetool\n说明：--local指只在当前操作系统有效\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("h4",{attrs:{id:"_1-8-跨团队合作"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-8-跨团队合作"}},[s._v("#")]),s._v(" 1.8 跨团队合作")]),s._v(" "),e("ul",[e("li",[e("p",[e("strong",[s._v("同一个团队")])]),s._v(" "),e("p",[e("strong",[s._v("邀请成员")]),s._v(":"),e("code",[s._v("Settings")]),s._v(" --\x3e "),e("code",[s._v("Collaborators")]),s._v(" --\x3e"),e("code",[s._v("填写用户名")]),s._v(" --\x3e`打开链接接受邀请``")])]),s._v(" "),e("li",[e("p",[e("strong",[s._v("给团队以外的人共享代码并合并他提交的代码")])]),s._v(" "),e("p",[e("code",[s._v("组织做review")]),s._v(" "),e("code",[s._v("通过Pull request")])]),s._v(" "),e("p",[e("strong",[s._v("团队以外的人")]),s._v("：")]),s._v(" "),e("p",[e("code",[s._v("点击别人仓库的fork 到自己的仓库")]),s._v("   -- > "),e("code",[s._v("然后clone下来 修改后推送到远程库")]),s._v("  --\x3e "),e("code",[s._v("点击Pull Request请求")]),s._v(" --\x3e "),e("code",[s._v("Create pull request发消息")])]),s._v(" "),e("p",[e("strong",[s._v("仓库管理者")]),s._v("：")]),s._v(" "),e("p",[e("code",[s._v("点击Pull Requests --\x3e Files changed 审核代码后 --\x3e Merge pull request --\x3e 填写提交日志 --\x3e Confirm merge")])])])]),s._v(" "),e("h4",{attrs:{id:"_1-9-tag标签"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-9-tag标签"}},[s._v("#")]),s._v(" 1.9 Tag标签")]),s._v(" "),e("p",[e("code",[s._v("为了清晰的版本管理，公司一般不会直接使用commit提交")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("git tag -a v1.0 -m '版本介绍'   #创建本地tag信息\ngit tag -d v1.0    \t\t#删除tag\ngit push origin --tags   #将本地tag信息推送到远程库\ngit pull origin --tags    #拉取到本地\n\ngit checkout v.10    #切换tag\ngit clone -b v0.1 地址   #指定tag下载代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])]),e("h4",{attrs:{id:"_1-10-ssh-免密登录"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-10-ssh-免密登录"}},[s._v("#")]),s._v(" 1.10 SSH 免密登录")]),s._v(" "),e("ul",[e("li",[s._v("输入:"),e("code",[s._v("ssh-keygen -t rsa -C GitHub邮箱地址")])]),s._v(" "),e("li",[s._v("进入"),e("code",[s._v(".ssh")]),s._v("目录，复制"),e("code",[s._v("id_rsa.pub")]),s._v("文件内容")]),s._v(" "),e("li",[s._v("登录GitHub。"),e("code",[s._v("Settings")]),s._v("  --\x3e "),e("code",[s._v("SSH and GPG keys")]),s._v(" --\x3e "),e("code",[s._v("New SSH Key")])]),s._v(" "),e("li",[s._v("回到git通过ssh地址创建。"),e("code",[s._v("git remote add 别名 SSH地址")])])]),s._v(" "),e("h2",{attrs:{id:"git工作流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#git工作流"}},[s._v("#")]),s._v(" Git工作流")]),s._v(" "),e("h4",{attrs:{id:"_1-1-概念"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-概念"}},[s._v("#")]),s._v(" 1.1 概念")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("在项目开发过程中使用Git的方式\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h4",{attrs:{id:"_1-2-分类"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-分类"}},[s._v("#")]),s._v(" 1.2 分类")]),s._v(" "),e("h5",{attrs:{id:"_1-2-1-集中式工作流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-1-集中式工作流"}},[s._v("#")]),s._v(" 1.2.1 集中式工作流")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("像SVN一样，集中式工作流有一个中央仓库，所有的修改都提交到了Master分支上\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"_1-2-2-gitflow工作流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-2-gitflow工作流"}},[s._v("#")]),s._v(" 1.2.2 GitFlow工作流")]),s._v(" "),e("p",[s._v("主干分支"),e("code",[s._v("master")]),s._v("  开发分支"),e("code",[s._v("develop")]),s._v("  修复分支"),e("code",[s._v("hotfix")]),s._v("   预发布分支"),e("code",[s._v("release")]),s._v("  功能分支"),e("code",[s._v("feature")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("GitFlow 有独立的分支，让发布迭代过程更流畅。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"_1-2-3-forking-工作流"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-3-forking-工作流"}},[s._v("#")]),s._v(" 1.2.3 Forking 工作流")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("在 GitFlow 基础上， 充分利用了 Git 的 Fork 和 pull request 的功能以达到代码审核的目的。 \n安全可靠地管理大团队的开发者\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("h2",{attrs:{id:"eclipse使用git管理项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#eclipse使用git管理项目"}},[s._v("#")]),s._v(" Eclipse使用Git管理项目")]),s._v(" "),e("h4",{attrs:{id:"_1-1-本地项目使用git"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-本地项目使用git"}},[s._v("#")]),s._v(" 1.1 本地项目使用Git")]),s._v(" "),e("h5",{attrs:{id:"_1-1-1-git配置"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-1-git配置"}},[s._v("#")]),s._v(" 1.1.1 git配置")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("Window --\x3e Preferences --\x3e Team --\x3e Git --\x3e Configuration --\x3e User Settings(全局配置)/Repository Settings(单独项目配置)\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"_1-1-2-git提交忽略"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-2-git提交忽略"}},[s._v("#")]),s._v(" 1.1.2 git提交忽略")]),s._v(" "),e("p",[s._v("https://github.com/github/gitignore")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("不同语言对应的git忽略模板，放在用户根目录，并在.gitconfig全局配置文件中加入\n[core]\n\texcludesfile = C:/Users/LXK/java.gitignore #必须为正斜线/\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("h5",{attrs:{id:"_1-1-3-本地项目使用git管理"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-3-本地项目使用git管理"}},[s._v("#")]),s._v(" 1.1.3 本地项目使用git管理")]),s._v(" "),e("ul",[e("li",[s._v("将项目初始化为本地库")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("项目右键 --\x3e Team --\x3e Share project --\x3e Git --\x3e Use or create repository in parent folder of project --\x3e Create Repository\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("项目提交到暂存区")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("项目右键 --\x3e Team --\x3e Add to Index\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("项目提交到本地库")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("项目右键 --\x3e Team --\x3e Commit...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("本地库关联远程库")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("项目右键 --\x3e Team --\x3e Remote --\x3e Push...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("提交到远程库")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("项目右键 --\x3e Team --\x3e Remote --\x3e Push...\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("远程拉取代码")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("项目右键 --\x3e Team --\x3e Pull\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("ul",[e("li",[s._v("解决远程库与本地库冲突")])]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("先把远程代码拉取下来 --\x3e Team --\x3e Merge(合并)... --\x3e 对比本地库与远程库的区别 --\x3e 人工具体解决冲突 --\x3e 提交\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h5",{attrs:{id:"_1-1-4-eclipse导入git项目"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-4-eclipse导入git项目"}},[s._v("#")]),s._v(" 1.1.4 Eclipse导入Git项目")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("右键 --\x3e Import... --\x3e Git --\x3e Projects from Git --\x3e Clone URI --\x3e 填写远程库地址、用户名/密码、导入本地路径。。。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("h2",{attrs:{id:"内网搭建gitlab服务器"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#内网搭建gitlab服务器"}},[s._v("#")]),s._v(" 内网搭建GitLab服务器")]),s._v(" "),e("h5",{attrs:{id:"_1-1-安装命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-安装命令"}},[s._v("#")]),s._v(" 1.1 安装命令")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("yum install -y curl policycoreutils-python openssh-server openssh-clients\t#安装依赖包\nsystemctl enable sshd\t#开机启动sshd\nsystemctl start sshd\t#开机启动sshd\ncurl -s https://packages.gitlab.com/install/repositories/gitlab/gitlab-ce/script.rpm.sh | bash\t\t\t\t\t\t\t\t\t#安装Gitlab-ce 社区版\nyum install -y gitlab-ce.x86_64\t\t  #安装Gitlab-ce 社区版\nrpm -qa gitlab-ce\t\t\t\t\t  #安装Gitlab-ce 社区版\nvim /etc/gitlab/gitlab.rb\t\t\t  #此处修改下图中的external_url地址\ngitlab-ctl reconfigure\t\t\t\t  #加载配置，使gitlab配置生效\ngitlab-ctl start\t\t\t\t\t  #开启gitlab\nsystemctl enable gitlab-runsvdir\t  #开机启动\nsystemctl status gitlab-runsvdir\t  #开机启动\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br"),e("span",{staticClass:"line-number"},[s._v("10")]),e("br"),e("span",{staticClass:"line-number"},[s._v("11")]),e("br")])]),e("p",[e("img",{attrs:{src:"C:%5CUsers%5C18939%5CAppData%5CRoaming%5CTypora%5Ctypora-user-images%5Cimage-20200210175557968.png",alt:"image-20200210175557968"}})]),s._v(" "),e("h5",{attrs:{id:"_1-2-访问-gitlab页面"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-2-访问-gitlab页面"}},[s._v("#")]),s._v(" 1.2 访问 GitLab页面")]),s._v(" "),e("p",[s._v("http://192.168.0.107 (你的ip地址)")]),s._v(" "),e("h5",{attrs:{id:"_1-3-注意"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_1-3-注意"}},[s._v("#")]),s._v(" 1.3 注意")]),s._v(" "),e("p",[s._v("GitLab启动后，可能需要几分钟的时间，在此时间段内访问会502，正常。")]),s._v(" "),e("h2",{attrs:{id:"遇到的问题"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#遇到的问题"}},[s._v("#")]),s._v(" 遇到的问题")]),s._v(" "),e("p",[s._v("在idea中使用git管理项目，如果update project，会把本地未commit的代码覆盖。")])])}),[],!1,null,null,null);a.default=r.exports}}]);