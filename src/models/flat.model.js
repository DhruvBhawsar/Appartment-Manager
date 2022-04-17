const mongoose = require("mongoose");

const flatSchema = new mongoose.Schema(
  {
    society_name: { type: String, required: true },
    total_no_residents: { type: Number, required: true },
    flat_type: { type: String, required: true },
    BHK_type: { type: String, required: true },
    block_names: { type: String, required: true },
    price: { type: Number, required: true },
    // images: { type: Array, required: false },
    resident_details: { type: String, required: true },
    flat_nos: { type: Number, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("Flat", flatSchema);
