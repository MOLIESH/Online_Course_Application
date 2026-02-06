const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
require("dotenv").config();

const userRoutes = require("./routes/userRoutes");
const contactRoutes = require("./routes/contactRoutes"); // ✅ ADD THIS
const courseRoutes = require("./routes/courseRoutes");


const app = express();


/* ========================
   Security Middleware
======================== */

app.use(helmet());
app.use(cors());
app.use(express.json());

/* ========================
   Rate Limiting
======================== */

app.use(
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 100,
  })
);

/* ========================
   Routes
======================== */

// User Auth Routes
app.use("/users", userRoutes);

// Contact Form Routes ✅
app.use("/contacts", contactRoutes);

// Course Registration Form
app.use("/courses", courseRoutes);


/* ========================
   Test Route
======================== */

app.get("/", (req, res) => {
  res.send("Backend is running...");
});

/* ========================
   Error Handler
======================== */

app.use((err, req, res, next) => {

  console.error(err.stack);

  res.status(500).json({
    message: "Server Error",
  });

});




module.exports = app;
