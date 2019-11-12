const express = require('express');
const userRoute = express.Router( );
const UserController = require('../controllers/UserController');

userRoute.post('/users/new', UserController.store);
userRoute.get('/users', UserController.filter);

module.exports = userRoute;