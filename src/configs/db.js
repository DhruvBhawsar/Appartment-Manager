const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://dhruv:dhruv@123@cluster0.kgzvk.mongodb.net/appartment?retryWrites=true&w=majority"
  );
};
