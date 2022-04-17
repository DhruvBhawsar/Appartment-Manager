const express = require("express");
const router = express.Router();

const Flat = require("../model/flat.model");

router.post("/", async (req, res) => {
  const flat = new Flat(req.body);
  try {
    const newFlat = await flat.save();
    res.status(201).json(newFlat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const size = parseInt(req.query.size) || 5;
    const skip = size * (page - 1);

    const flats = await Flat.find().skip(skip).limit(size).lean().exec();
    const totalPages = Math.ceil((await Flat.countDocuments().exec()) / size);
    res.status(200).json({ flats, totalPages });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.id);
    res.status(200).json(flat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletedFlat = await Flat.findByIdAndDelete(req.params.id);
    res.status(200).json(deletedFlat);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
