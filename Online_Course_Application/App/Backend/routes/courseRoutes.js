const express = require("express");
const router = express.Router();

const {
  registerCourse,
} = require("../controllers/courseController");


// Register Course
router.post("/register", registerCourse);


module.exports = router;
