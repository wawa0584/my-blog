(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{584:function(e,t,n){"use strict";n.r(t);var a=n(30),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[n("p",[n("a",{attrs:{href:"https://www.jianshu.com/p/0dedba35e922",target:"_blank",rel:"noopener noreferrer"}},[e._v("接上篇"),n("OutboundLink")],1)]),e._v(" "),n("p",[e._v("Docker容器虽然运行起来了。")]),e._v(" "),n("p",[e._v("但遇到了新的问题：")]),e._v(" "),n("ol",[n("li",[e._v("容器内安装的服务器是nginx，对于ThinkPHP项目，还需要一些额外的配置，简单的说在apache服务器下运行 http://localhost:8088/home/Index/index 能正常返回结果，而nginx下返回404，必须要写成  http://localhost:8088/index.php?m=home&c=Index&a=demo\n所以我需要修改nginx配置文件，使其支持。")]),e._v(" "),n("li",[e._v("由于容器本身是无状态的，如果进到容器里修改完配置文件，关闭docker，下次在启动后还是原样，我需要保存修改。")])]),e._v(" "),n("p",[e._v("下面是解决方法：")]),e._v(" "),n("ol",[n("li",[e._v("镜像为了精简并没有安装VIM编辑器，编辑文件不方便，要先安装 "),n("code",[e._v("apt-get update; apt-get install vim")]),e._v("\n注意，如果执行 apt-get update 超时了，试试翻墙。或者替换为国内源。")]),e._v(" "),n("li",[n("code",[e._v("vi /etc/nginx/sites-enabled/default")]),e._v(" 编辑并修改配置文件，记得最好先备份")]),e._v(" "),n("li",[e._v("修改完新开个窗口\n先执行 "),n("code",[e._v("docker ps")]),e._v(" 查看正在运行的容器，复制 container id。\n然后 "),n("code",[e._v("docker commit [OPTIONS] CONTAINER [REPOSITORY[:TAG]]")]),e._v(" 如 docker commit cb439fb2c714 finley/phpenv:tp3.2\ncommit 会基于对container的修改创建一个新的镜像\n具体用法请参见官方文档："),n("a",{attrs:{href:"https://docs.docker.com/engine/reference/commandline/commit/",target:"_blank",rel:"noopener noreferrer"}},[e._v("commit"),n("OutboundLink")],1)])]),e._v(" "),n("div",{staticClass:"custom-block warning"},[n("p",{staticClass:"custom-block-title"},[e._v("WARNING")]),e._v(" "),n("p",[e._v("经查，不推荐更改运行中的容器配置，容器本身是无状态的，当然也可以通过进入容器内部的方式进行更改: docker exec -it 这样的更改是无法持久化保存的，当容器重启后，更改就丢失了，正确的做法是将需要持久化保存的数据放在挂载的存储卷中，当配置需要改变时直接删除重建。")])]),e._v(" "),n("p",[e._v("回顾：")]),e._v(" "),n("div",{staticClass:"language- line-numbers-mode"},[n("pre",{pre:!0,attrs:{class:"language-text"}},[n("code",[e._v("# 从仓库拉镜像\ndocker pull eriksencosta/php-dev\n# 基于上面的镜像加入了自己的修改并提交为自己的镜像，还打了tag\ndocker commit cb439fb2c714  finleyma/php-dev:tp3.2\n")])]),e._v(" "),n("div",{staticClass:"line-numbers-wrapper"},[n("span",{staticClass:"line-number"},[e._v("1")]),n("br"),n("span",{staticClass:"line-number"},[e._v("2")]),n("br"),n("span",{staticClass:"line-number"},[e._v("3")]),n("br"),n("span",{staticClass:"line-number"},[e._v("4")]),n("br")])]),n("p",[e._v("问题：\n这个项目的环境是有了，但是是多人开发，我如何将我的配好的镜像分享给他人呢？\n"),n("a",{attrs:{href:"https://www.jianshu.com/p/bd4ac1999090",target:"_blank",rel:"noopener noreferrer"}},[e._v("见下篇"),n("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=r.exports}}]);