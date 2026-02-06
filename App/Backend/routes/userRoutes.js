const express = require("express");
const router = express.Router();

const {
  registerUser,
  loginUser,
  getUserProfile,
} = require("../controllers/userController");

const { protect } = require("../middlewares/authMiddleware");

/* ============================
   Auth Routes (Public)
============================ */

// Register
router.post("/register", registerUser);

// Login
router.post("/login", loginUser);


/* ============================
   Protected Routes
============================ */

// Get Logged-in User Profile
router.get("/profile", protect, getUserProfile);


module.exports = router;

