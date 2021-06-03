## 请求用户信息时候 跨域

> 配置 setupProxy.js 文件

## 项目概述(本地)

### 前端运行地址：localhost: 3000

### 后端运行地址：localhost: 5000

1. 数据库 databases： brush-web
2. 表 tables: questions(题库) users(用户) comments(评论)
   **数据模型**

```javascript
questions:{
  id: string,		// 数据的唯一标识
  content: string,	// 题目内容
  options: array,		// 选项，有的话
  categery: string, // html,js,css,es6,...
  ans: string,		// 参考答案
  index: number,	// 随机出题的索引，只向后追加
  comments_id: number,		// 联系与之对应的评论（还不会）
}
users:{
  username: string,
  password: crypto(secret),
  uid: number,
}

```

## 问题记录

> Rendered more hooks than during the previous render.

出现原因： 将子组件在父组件中以函数形式调用(Son()) 而不是 组件形式调用(<Son/>),
解释： 虽然组件就是函数，函数可以是组件，但是如果你用函数的方法调用一个组件函数的话，它就不能使用 hook

> 自己搭建的 Express 服务器代码访问会 504 ，但是浏览器访问正常

出现原因： 在代理配置中 target: http://localhost: 4000 没有填写 http://
