const Course = require("../models/courseModel");


/* =====================
   REGISTER COURSE
===================== */

const registerCourse = (req, res) => {

  const data = req.body;

  Course.create(data, (err) => {

    if (err) {
      console.error(err);
      return res.status(500).json({
        message: "Database error",
      });
    }

    res.status(201).json({
      message: "Course Registered Successfully",
    });
  });

};

module.exports = {
  registerCourse,
};
