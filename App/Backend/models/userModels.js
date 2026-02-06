const db = require("../config/db");

// Find user
exports.findUserByEmail = (email, cb) => {
  db.query(
    "SELECT * FROM users WHERE email=?",
    [email],
    cb
  );
};

// Create user
exports.createUser = (user, cb) => {
  db.query(
    "INSERT INTO users (name,email,password) VALUES (?,?,?)",
    [user.name, user.email, user.password],
    cb
  );
};
