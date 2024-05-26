const express = require('express');
const app = express();

const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/jsbin')
  .then(() => console.log('Connected!'));

app.use(express.json());

//Routes
const userRouter = require('./Routers/userRouter');
const blogRouter = require('./Routers/blogRoutes');

app.use('/api/',userRouter);
app.use('/api/',blogRouter)

app.listen(8000);
