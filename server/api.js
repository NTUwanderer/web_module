'use strict'

const Router = require('express').Router;
const router = new Router();

router.get('/hello', (req, res) => {
  res.send('Succeed');
});

router.use((err, req, res) => {
  res.status(err.status || 500);
  res.send(err);
});

module.exports = router;
