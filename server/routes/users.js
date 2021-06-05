const express = require('express');
const router = express.Router();
const mysql = require('mysql');
// 连接 mysql 配置文件
const config = require('../config');

let resdata = null;
function getUsers(config) {
  const db = mysql.createConnection(config);
  db.query("SELECT * FROM users", (err, data) => {
    if (err) console.log(err);
    else {
      resdata = data;
    }
  })
}
getUsers(config.DATABASE)
router.get('/', (req, res, next) => {

  res.send(resdata);
})

module.exports = router;