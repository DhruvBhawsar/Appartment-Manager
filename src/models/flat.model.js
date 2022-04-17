const mongoose = require("mongoose");

const FlatSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    gender: {
      type: String,
      required: true,
      default: "Male",
    },
    age: { type: Number, required: true },
    flatImage: { type: String, required: true },
    flatType: { type: String, required: true },
    flatblock: { type: String, required: true },
    flatNumber: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("flat", FlatSchema);
