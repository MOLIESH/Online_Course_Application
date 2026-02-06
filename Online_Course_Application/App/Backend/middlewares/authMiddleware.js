const jwt = require("jsonwebtoken");
require("dotenv").config();

/* ============================
   JWT Protection Middleware
============================ */

exports.protect = (req, res, next) => {

  let token;

  // Check Authorization header
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {

    token = req.headers.authorization.split(" ")[1];

  }

  // If token not found
  if (!token) {
    return res.status(401).json({
      success: false,
      message: "Access denied. No token provided.",
    });
  }

  try {

    // Verify token
    const decoded = jwt.verify(
      token,
      process.env.JWT_SECRET
    );

    // Attach user id to request
    req.userId = decoded.id;

    next();

  } catch (err) {

    // Token expired
    if (err.name === "TokenExpiredError") {
      return res.status(401).json({
        success: false,
        message: "Token expired. Please login again.",
      });
    }

    // Invalid token
    return res.status(401).json({
      success: false,
      message: "Invalid token.",
    });
  }
};

