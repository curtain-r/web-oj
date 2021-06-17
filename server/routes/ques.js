const express = require('express');

// 引入第三方 MySQL
const mysql = require('mysql');
// 引入配置文件
const config = require('../config');

const router = express.Router();

router.get('/', (req, res, next) => {
    // 与数据库建立连接
    const db = mysql.createConnection(config.DATABASE);
    db.query("SELECT * FROM questions", (err, data) => {
        console.log(data);
        res.send(data);
    })
})
module.exports = router;