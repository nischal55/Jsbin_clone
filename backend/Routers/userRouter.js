const express = require('express');
const userRouter = express.Router();

//Controllers import
const {createUser,getUser,loginFunc} = require('../Controller/userController');


userRouter.post('/user',createUser);
userRouter.get('/user',getUser);
userRouter.post('/userLogin',loginFunc)

module.exports = userRouter;