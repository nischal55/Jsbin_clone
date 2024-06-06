const bcrypt = require("bcrypt");
//importing Models
const User = require("../Models/userModel");

const createUser = async (req, res) => {
  let hash = await bcrypt.hash(req.body.password, 10);
  let user = await User.create({ ...req.body, password: hash });
  if (user) {
    res.status(200).send("User Account Created Successfully");
  }
};

const getUser = async (req, res) => {
  let user = await User.find();
  if (user) {
    res.status(200).send(user);
  } else {
    res.status(401).send("No  user Found");
  }
};

const loginFunc = async (req, res) => {
  let username_input = req.body.username;
let matched;
  let user = await User.findOne({ username: username_input }).select(
    "+password"
  );

  if (user) {
     matched = await bcrypt.compare(req.body.password, user.password);
    if (matched) {
        res.send({ username: user.username});
      } else {
        res.status(401).send("Invalid Credentials");
      }
    
  } else {
    res.status(401).send("Invalid Credentials");
  }

  
};
module.exports = { createUser, getUser, loginFunc };
