const bcrypt = require('bcrypt');
//importing Models
const User = require('../Models/userModel');

const createUser = async (req,res)=>{
    let hash = await bcrypt.hash(req.body.password,10);
    let user = await User.create({...req.body,password:hash});
    if(user){
        res.status(200).send("User Account Created Successfully");
    }
}

const getUser = async (req,res)=>{
    let user = await User.find();
    if(user){
        res.status(200).send(user)
    }else{
        res.status(401).send("No  user Found")
    }
}

module.exports = {createUser,getUser};