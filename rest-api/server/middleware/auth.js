const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const model = require("../model/users-model");
const SECRET = process.env.JWT_SECRET;

dotenv.config();

function verifyUser(req, res, next) {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    const error = new Error("Authorization header required");
    error.status = 404;
    next(error);
  } else {
    const token = authHeader.replace("Bearer ", "");
    try {
      const tokenData = jwt.verify(token, SECRET);
      model
        .getUserById(tokenData.user)
        .then((user) => {
          req.user = user;
          next();
        })
        .catch(next);
    } catch (_err) {
      const error = new Error("Not authorized");
      error.status = 401;
      next(error);
    }
  }
}

module.exports = verifyUser;