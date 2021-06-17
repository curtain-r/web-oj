const http = require('http');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const PORT = 4000;

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const codeRouter = require('./routes/code');
const quesRouter = require('./routes/ques')

const app = express();
// 静态化
app.use(express.static(path.join(__dirname, 'public')));
// 解析 URL-encoded 格式的请求体数据
app.use(express.urlencoded({ extended: false }))
app.use(express.json())

// 使用中间件处理 cookie
app.use(cookieParser());


// 配置路由
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/code', codeRouter)
app.use('/getQues', quesRouter)

const server = http.createServer(app);

server.listen(PORT, () => {
  console.log('run at ' + PORT)
})