const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username:{type:String, required:true},
    password : {type:String, required:true, select:false},
    email:{type:String, required:true, validate: {
        validator: async (value) => {
          let matched = await mongoose.models.User.findOne({ email: value });
          if (matched) {
            return false;
          }
        },
        message: "email already used",
      },},
      phone: { type: Number, required: true }
},
{timestamps:true});

const User = mongoose.model("User", UserSchema);
module.exports = User;