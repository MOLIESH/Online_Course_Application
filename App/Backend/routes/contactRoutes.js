const express = require("express");
const router = express.Router();

const {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

// =======================
// CONTACT CRUD ROUTES
// =======================

// Create
router.post("/", createContact);

// Read All
router.get("/", getContacts);

// Read One
router.get("/:id", getContact);

// Update
router.put("/:id", updateContact);

// Delete
router.delete("/:id", deleteContact);

module.exports = router;
