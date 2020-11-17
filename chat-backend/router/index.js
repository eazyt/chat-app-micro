/*jshint esversion: 10 */
const router = require('express').Router();

router.get('/home', (req, res) => {
  res.status(200).send('Welcom to the Home Page');
});

router.use('/', require('./auth'));

module.exports = router;