const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const BlogSchema = new Schema({
    title:{type:String, required:true},
    desc : {type:String, required:true},
    userId : {type:ObjectId, required:true}

},
{timestamps:true});

const Blog = mongoose.model("Blog", BlogSchema);
module.exports = Blog;