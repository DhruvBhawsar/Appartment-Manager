require("dotenv").config();
const jwt = require("jsonwebtoken");
const User = require("../models/user.model");

const newToken = (user) => {
  //   console.log(process.env);
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY);
};

const register = async (req, res) => {
  try {
    // we will try to find the user with email provided
    let user = await User.findOne({ email: req.body.email }).lean().exec();

    // if the user is found then it is an error
    if (user)
      return res.status(400).send({ message: "Please try another email" });

    // is user is not found then we will create the user with email and password provided
    user = await User.create(req.body);

    // then we will create the token for that user
    const token = newToken(user);

    // then return the user and the token

    res.send({ user, token });
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const login = async (req, res) => {
  try {
    // we will try to find the user with email provided
    const user = await User.findOne({ email: req.body.email });

    // if the user is notfound then return error
    if (!user)
      return res.status(400).send({ message: "Incorrect email and password " });
    // if password match then we will create the token

    const match = user.checkPassword(req.body.password);
    //then return the user and the token
    if (!match) {
      return res.status(400).send({ message: "Incorrect email and password " });
    }

    const token = newToken(user);

    // then return the user and the token

    res.send({ user, token });

    res.send("Login");
  } catch (err) {
    res.status(500).send(err.message);
  }
};

module.exports = { register, login };
