const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../models/userModels");
const db = require("../config/db");

/* ===================
   REGISTER
=================== */
exports.registerUser = async (req, res) => {

  try {

    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    User.findUserByEmail(email, async (err, data) => {

      if (err) {
        return res.status(500).json({
          message: "Database error",
        });
      }

      if (data.length > 0) {
        return res.status(409).json({
          message: "User already exists",
        });
      }

      // Hash password
      const hash = await bcrypt.hash(password, 10);

      User.createUser(
        { name, email, password: hash },
        (err) => {

          if (err) {
            return res.status(500).json({
              message: "User creation failed",
            });
          }

          res.status(201).json({
            message: "Registered Successfully",
          });
        }
      );
    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


/* ===================
   LOGIN
=================== */
exports.loginUser = async (req, res) => {

  try {

    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    User.findUserByEmail(email, async (err, data) => {

      if (err) {
        return res.status(500).json({
          message: "Database error",
        });
      }

      if (data.length === 0) {
        return res.status(404).json({
          message: "User not found",
        });
      }

      const user = data[0];

      // Compare password
      const match = await bcrypt.compare(
        password,
        user.password
      );

      if (!match) {
        return res.status(401).json({
          message: "Invalid credentials",
        });
      }

      // Create token
      const token = jwt.sign(
        { id: user.id },
        process.env.JWT_SECRET,
        { expiresIn: "1d" }
      );

      res.status(200).json({

        token,

        user: {
          id: user.id,
          name: user.name,
          email: user.email,
        },

      });

    });

  } catch (err) {

    console.error(err);

    res.status(500).json({
      message: "Server Error",
    });
  }
};


/* ===================
   GET PROFILE
=================== */
exports.getUserProfile = (req, res) => {

  const userId = req.userId;

  const sql = `
    SELECT id, name, email
    FROM users
    WHERE id = ?
  `;

  db.query(sql, [userId], (err, data) => {

    if (err) {
      return res.status(500).json({
        message: "Database Error",
      });
    }

    if (data.length === 0) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.json(data[0]);
  });
};
