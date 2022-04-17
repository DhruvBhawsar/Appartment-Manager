const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://dhruv:drv123@cluster0.on2yu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
  );
};
