const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(process.env.URL);
};
