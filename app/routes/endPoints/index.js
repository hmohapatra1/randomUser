/* eslint-disable linebreak-style */
/* eslint-disable max-len */
/* eslint-disable linebreak-style */
/* eslint-disable no-unused-vars */
/* eslint-disable new-cap */
const base = process.env.PWD;
const express = require('express');
const router = express.Router();
const userController = require('./../../controllers/userController/index.js');
router.get('/users', userController.getUsers);
router.post('/user', userController.createUser);
module.exports = router;
