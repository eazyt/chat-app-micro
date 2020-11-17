/*jshint esversion: 10 */
const User = require('../models').User;
const bcrypt = require('bcrypt');
const e = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config/app');


exports.login = async (req, res) => {
  const {
    email,
    password
  } = req.body;
  try {
    // const secret = reqiure('crypto-js').randomBytes(64).toString('hex');
    const crypto = require('crypto');

    const secret = 'abcdefg';
    const hash = crypto.createHmac('sha256', secret)
      .update('I love cupcakes')
      .digest('hex');
    // console.log(hash);

    // find the user in the database
    const user = await User.findOne({
      where: {
        email: email
      }
    });
    // check if user exists
    if (!user) {
      return res.status(404).json({
        message: 'password or username not correct, please try again!'
      });
    }
    // check if password is correct
    if (!bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({
        message: 'password or username not correct, please try again!'
      });
    }
    // generate auth token
    const userWithToken = generateToken(user.get({
      raw: true
    }));
    return res.send(userWithToken);

  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
  return res.send([email, password]);
};

exports.register = async (req, res) => {

  try {
    const user = await User.create(req.body);
    const userWithToken = generateToken(user.get({
      raw: true
    }));
    return res.send(userWithToken);
  } catch (error) {
    return res.status(500).json({
      message: error.message
    });
  }
};

const generateToken = (user) => {
  console.log(user);
  // delete user.password;
  const token = jwt.sign(user, config.appKey, {
    expiresIn: 86400
  });
  return {
    ...user,
    ...{
      token
    }
  };
};