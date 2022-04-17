const express = require("express");
const connect = require("./configs/db");

const userController = require("./controllers/users.controller");
const productController = require("./controllers/product.controller");
const { register, login } = require("./controllers/auth.controller");

const app = express();
app.use(express.json());

app.post("/register", register);
app.post("/login", login);

app.use("/users", userController);
app.use("/products", productController);

app.listen(2323, async () => {
  try {
    await connect();
    console.log("listening on 2323");
  } catch (err) {
    console.log(err.message);
  }
});
