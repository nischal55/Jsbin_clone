const express = require('express');
const userRouter = express.Router();

//Controllers import
const {createUser,getUser} = require('../Controller/userController');


userRouter.post('/user',createUser);
userRouter.get('/user',getUser)

module.exports = userRouter;