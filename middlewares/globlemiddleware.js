const { env } = require("../environments/env");
const jwt = require("jsonwebtoken");
const multer = require("multer");

exports.authenticate = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    res
      .json({
        success: false,
        errors: { message: "User not logged in" },
        data: {},
      })
      .status(404);
    return;
  }
  const token = authHeader.split(" ")[1];
  try {
    jwt.verify(token, env().jwt_secret, (err, data) => {
      if (err) {
        next(err);
      } else if (!data) {
        req.errorStatus = 401;
        next(new Error("User Not Authorised"));
      } else {
        console.log("middle", data);
        req.employeeData = data;
        next();
      }
    });
  } catch (e) {
    req.errorStatus = 401;
    next(e);
  }
};
