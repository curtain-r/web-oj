const express = require('express');
const { getcode } = require('../utils');
const router = express.Router();

router.post('/', (req, res, next) => {
  // 拿到目前登录的 手机号  req.body.data.phone;
  const { body: { data: { phone } } } = req;
  // 生成随机数
  const code = getcode();
  // 将随机数返回给前端
  res.send({ code })
})

module.exports = router;