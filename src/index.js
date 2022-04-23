const express = require("express");
const connect = require("./configs/db");
const port = process.env.PORT || 8080;
const flatController = require("./controllers/flat.controller");
var cors = require("cors");

const app = express();
app.use(express.json());
app.use("/flat", flatController);

// const userController = require("./controllers/user.controller");

const { register, login } = require("./controllers/auth.controller");
app.post("/register", register);
app.post("/login", login);

app.use(cors());

// app.use("users", userController);

app.listen(port, async () => {
  try {
    await connect();
    console.log(`listening on ${port}`);
  } catch (err) {
    console.log(err.message);
  }
});
