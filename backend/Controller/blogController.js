const Blog = require('../Models/blogModel');

const createBlog = async(req,res)=>{
    try{
        let blog = await Blog.create({...req.body})
        if(blog){
            res.send(blog)
        }
    }catch(e){
        res.status(401).send(e.message);
    }

}

const getBlog = async (req,res)=>{
    try{
        let blog = await Blog.find();
        if(blog){
            res.send(blog);
        }
    }catch(e){
        res.status(500).send(e.message)
    }
}

const getSingleProduct = async (req,res)=>{
    try{
        let blog = await Blog.findOne({_id:req.params.id});
        if(blog){
            res.send(blog);
        }
    }catch(e){
        res.status(500).send(e.message)
    }
}

module.exports = {createBlog,getBlog,getSingleProduct}