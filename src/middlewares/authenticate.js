const jwt = require("jsonwebtoken");

require("dotenv").config();

const verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
      if (err) return reject(err);

      resolve(user);
    });
  });
};

module.exports = async (req, res, next) => {
  //check if autherix=zation header has been set

  // if not throw an errors
  if (!req.headers.authorization)
    return res
      .status(400)
      .send({ message: "autherization token was not provided or was invalid" });

  //if bearer token is in autherization header
  //if not throw an error
  if (!req.headers.authorization.startsWith("Bearer "))
    return res
      .status(400)
      .send({ message: "autherization token was not provided or was invalid" });

  //split the bearer token abd get the [1] which is token
  const token = req.headers.authorization.split(" ")[1];

  //then we will call jwt to verify the token
  let user;
  // if token is invalid then we will throw an error
  try {
    user = await verifyToken(token);
  } catch (err) {
    return res.status(400).send({
      message: "autherization token was not provided or was invalid",
    });
  }

  req.user = user.user;

  // console.log(req.user);
  //if token is valid then we willl put the user retrieve from the token in the req object

  // return next

  return next();
};
