const express = require('express')
const blogRoutes = express.Router();

const {createBlog, getBlog} = require('../Controller/blogController')

blogRoutes.post('/blog',createBlog);
blogRoutes.get('/blog',getBlog);

module.exports = blogRoutes;