const express = require("express");
const connect = require("./configs/db");

// const flatController = require("./controllers/flat.controller");

const app = express();
app.use(express.json());
// app.use("/flat",flatController)

app.listen(2323, async () => {
  try {
    await connect();
    console.log("listening on 2323");
  } catch (err) {
    console.log(err.message);
  }
});
