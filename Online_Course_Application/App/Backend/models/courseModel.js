const db = require("../config/db"); // your mysql connection

const Course = {

  create: (data, callback) => {

    const sql = `
      INSERT INTO course_registrations
      (name, email, mobile, course, price)
      VALUES (?, ?, ?, ?, ?)
    `;

    db.query(
      sql,
      [
        data.name,
        data.email,
        data.mobile,
        data.course,
        data.price,
      ],
      callback
    );
  },

};

module.exports = Course;
