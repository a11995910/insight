[📖使用文档](https://github.com/Elliottssu/insight/wiki/%E4%BD%BF%E7%94%A8%E6%96%87%E6%A1%A3) | [❓常见问题](https://github.com/Elliottssu/insight/wiki/%E5%B8%B8%E8%A7%81%E9%97%AE%E9%A2%98) | [💙创作历程](https://www.jianshu.com/p/83ddd46b3d5d)


## 部署教程
这个是在nginx上部署此工程的使用参考教程：[从0到1，Nginx部署Nodejs+React教程](https://www.jianshu.com/p/5af19b772948)


## 快速启动

```shell
# 本地开发环境
# 启动前端
cd insight-front-end 
npm install
npm start   

# 启动后端
cd insight-back-end
npm install
npm run dev     

```

访问http://localhost:3000 即可启动。

前后端使用的是React+Nodejs，数据库默认为Mysql测试库，您进入`insight-back-end/config`文件夹下，修改为自己的Mysql配置。

## Insight是什么？

Insight是一个**可以管理企业微信群机器人的小工具，在这里添加一个机器人webhook地址，然后发布即时消息和定时消息，消息就会发送到企业微信中机器人所在的群里**。

比如每个周五下午17:00，还在手动在群里发消息提醒@所有人写周报？No，现在只需在Insight上绑定一个机器人，创建一个“每周五下午17:00”执行的定时任务，即可完美解决。这种简单重复的工作就交给Insight吧！

## 产品特色

1. 一键发布消息，支持@所有人、指定人，方便快捷。
2. 强大的定时功能，可以每天执行并且智能跳过节假日，彻底解放双手。
3. 简约的排版，科幻的风格，3分钟内轻松上手。
4. 贴心的自定义套件，拓展代码实现自定义文本内容。
5. 完备的权限控制，保证机器人运行安全无忧。
6. 支持移动端布局，支持集成到企业微信控制台。
7. 消息支持自定义Cron表达式。


## 技术栈

我们使用的技术尽量是通用简单，即使是一个前端工程师也可以很快掌握前后端代码，下面是前后端项目用到的技术栈，和使用到的组件库。

| 业务   | 技术   |  教程 |
| ------ | -------- | ------ |
| 前端 | React+ Create React App + Mobx + Ant Design | 我有一篇博客专门介绍React技术栈的学习路线：[react-build](https://github.com/Elliottssu/react-build)，那里讲的很详细。|
| 后端 | Nodejs+ Egg + Typeorm + Typescript + Mysql |  后端使用[Egg.js](https://eggjs.org/zh-cn/intro/index.html)+Typescript模版，数据库操作使用的是ORM，非常方便，如果您需要基于此开发，可以看看[官方文档](https://typeorm.io/)，相信你会喜欢。|

您可以随时把Mysql换成其他数据库，网上有教程，不过安装一个Mysql也很简单。

## 常见问题
1. 如何找到我要添加的机器人？
2. 怎样将此工具添加到企业微信控制台？
3. 智能跳过节假日功能，每年假期不一样，该如何更新？
4. 怎样才能成为超级管理员，权限分配是怎样的？
5. 自定义套件是什么？如何开启？
6. 如何部署？
...

