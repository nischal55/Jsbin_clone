const express = require('express')
const blogRoutes = express.Router();

const {createBlog, getBlog, getSingleProduct} = require('../Controller/blogController')

blogRoutes.post('/blog',createBlog);
blogRoutes.get('/blog',getBlog);
blogRoutes.get('/blog/:id',getSingleProduct);


module.exports = blogRoutes;