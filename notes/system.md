# 什么是跨域，如何解决跨域问题

> 什么是跨域？

当一个请求url的`协议, 域名，端口号`三者之间任何一个与当前页面的url不同时，即为跨域

> 什么是同源策略?

同源策略是一种约定，即`协议，域名，端口号`三者需要相同，这是浏览器最基本最核心的安全功能，否则，容易受到XSS, CSRF攻击

> 如何解决跨域问题

JSONP：
  - 利用html元素中某些标签具有跨域功能，例如a, link script等。
  - 将请求地址写在src属性值里，并添加一个参数callback
  - 服务器接受了这个回调函数，返回的时候再把这个函数返回给客户端，并在里面添加数据
  - 客户端的callback函数由此接收到了由服务器传递过来的参数，即解决了跨域的问题
  - 他的缺点是只能发起get请求，参数携带在目标地址的后面


Proxy代理：
  - 这是Vue等项目中较为常见的一种解决方案，即配置一个代理服务器
  - 由于跨域问题只存在于浏览器，服务器与服务器之间并不存在，所以可以在当前域名下配置一台代理服务器作为数据的转发
  - webpack配置项中，有一个devServer,配置里面的proxy即可
  - ngnix反向代理，也是一样道理(主要用来做负载均衡用的)

CORS(跨域资源共享)
  - CORS是一个W3C标准，全称是"跨域资源共享"（Cross-origin resource sharing）。
  - 它允许浏览器向跨源服务器，发出XMLHttpRequest请求，从而克服了AJAX只能同源使用的限制。
  - 主要的解决方法是往响应头中添加 Access-Control-Allow-Origin: * 等类型的响应头
  - 这里的请求分为普通请求和复杂请求，复杂请求响应的东西要多一点，作为了解即可
[参考资料](https://blog.csdn.net/weixin_43641218/article/details/120436830)

# # ajax, fetch, axios的区别

  - Ajax: 异步的 javascript and xml , 它是一个技术统称，是一个模型概念，包含了很多的技术，最重要的特性就是让页面实现局部刷新， 例如XMLHttpRequest就是实现Ajax的一种方式而已
  - Fetch使用了ES6的Promise对象，它是XMLHttpRequest的替代品， 已经内嵌在浏览器中，是可以直接使用的，它是一个API
  - axios是对XMLHttpRequest进行的二次封装，也是基于promise，因为它是一个库，而不是一个简单的API，所以功能比较多，比如请求拦截，发送数据，返回数据的处理等

![img](../images/00007.png)

# 常用的git命令

- `git init`: 将项目加入git版本管理，目录下多了.git文件，使用ls看不到这个文件夹， 需要使用ls -ah
- `git config --global --list`: 查看全局的配置， global可以换成local
- `git config --global --user.name "mianmami"`: 设置用户名
- `git config --global --user.email "760776821@qq.com"`：设置邮箱
- `git add XX  git add .` : 把文件从工作区加入暂存区
- `git commit -m '备注'`: 把文件从暂存区添加到版本库
- `git status`: 查看文件的状态，如果还在工作区是红色，如果还在暂存区是绿色
- `git log   简写：git log --pretty=oneline`：查看日志，显示一共git commit了多少内容
- `git remote -v`: 查看本地仓库与哪些远程仓库链接
- `git remote rm <ssh地址>`:断开与远程仓库的链接
- `git remote add origin <ssh地址>`：添加与远程仓库的链接，add origin表示这个仓库的别名，origin可以改
- `git push --set-upstream origin master:master`
  - --set-upstream可以简写为-u, 表示记住这一次的设置，下次直接git push即可
  - origin表示push的仓库名称
  - origin master:master表示：本地仓库的master分支中的文件上传到 本地别名为origin的远端仓库的master分支中。
  - 整句话可以简写为git push --u origin master
  - 如果还没有创建本地仓库，那么需要提前创建。(注意：vue-cli已经帮我们init了项目，可以通过git log进行查看)
- `git branch`: 查看本地的分支
- `git branch -r`: 查看远程仓库的分支
- `git branch 名字 ID号`: 创建一个分支 ID号是以某个事件点地代码，创建一个分支出来， 如果没有的话，就是git branch XX 
- `git branch XX`: 创建一个分支
- `git checkout XX`: 切换到一个分支上
- `git checkout -b XX`: 创建一个分支，并立即切换到该分支
- `git brahch -d XX`: 删除一个分支
- `git merge XX`: 先切换到一个新的分支上，再把旧的内容添加到新的分支里
- `it restore <file>`: 撤销修改的文件，注意此文件必须还未操作git add 命令。如果已经添加到了暂存区，那么先要执行 `git restore --staged <file>`
- 注意：如果一个文件夹中没有README.md，然后想要推送到github，会报错的。。。。。。。。。。。。
- 如果要忽略一个文件夹，就创建一个.gitignore文件，然后  每一行添加一个要忽略的文件即可 例如： /test    /test/dist
- 如果想要跟踪一个文件夹，但是不跟踪文件夹里的内容，可以在这个文件夹下 自定义一个叫做  .gitkeep的文件
- 





















































