const express = require("express");
// const ApiFeatures = require("../utils/apifeatures");
const Flat = require("../models/flat.model");
const router = express.Router();

router.post("", async (req, res) => {
  try {
    const user = await Flat.create(req.body);
    console.log(req.body);
    return res.status(201).send(user);
  } catch (e) {
    return res.status(500).json({ message: e.message, status: "Failed" });
  }
});

router.get("", async (req, res) => {
  try {
    const page = req.query.page || 1;
    const size = req.query.size || 7;

    // const query = { gender: "Female" };
    const users = await Flat.find()
      .skip((page - 1) * size)
      .limit(size)
      .lean()
      .exec();

    const totalPages = Math.ceil((await Flat.find().countDocuments()) / size);
    return res.send({ users, totalPages });
  } catch (er) {
    return res.status(500).send(er.message);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const flat = await Flat.findById(req.params.id);
    return res.status(200).send(flat);
  } catch (e) {
    return res.status(500).json({ status: "Failled", message: e.message });
  }
});

// router.get("/:type", async (req, res) => {
//   try {
//     const flat = await Flat.find({ type: req.params.flatType }).lean.exec();
//     return res.status(200).send(flat);
//   } catch (e) {
//     return res.status(500).send(e.message);
//   }
// });

module.exports = router;
