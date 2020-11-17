/*jshint esversion: 10 */
const {
  body
} = require('express-validator');

exports.rules = (() => {
  return [
 
    body('email').isEmail(),
 
  ];
})();
