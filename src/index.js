const express = require("express");
const connect = require("./configs/db");
const port = process.env.PORT || 8080;
const flatController = require("./controllers/flat.controller");
var cors = require("cors");

const app = express();
app.use(express.json());
app.use("/flat", flatController);

app.use(cors());

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on ${port}`);
  } catch (err) {
    console.log(err.message);
  }
});
