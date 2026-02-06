const db = require("../config/db");

/* Create */
exports.createContact = (data, callback) => {

  const sql = `
    INSERT INTO contacts
    (name,email,subject,contact,category,message)
    VALUES (?,?,?,?,?,?)
  `;

  db.query(
    sql,
    [
      data.name,
      data.email,
      data.subject,
      data.contact,
      data.category,
      data.message,
    ],
    callback
  );
};

/* Read All */
exports.getAllContacts = (callback) => {

  const sql = "SELECT * FROM contacts ORDER BY id DESC";

  db.query(sql, callback);
};

/* Read One */
exports.getContactById = (id, callback) => {

  const sql = "SELECT * FROM contacts WHERE id=?";

  db.query(sql, [id], callback);
};

/* Update */
exports.updateContact = (id, data, callback) => {

  const sql = `
    UPDATE contacts SET
    name=?, email=?, subject=?, contact=?,
    category=?, message=?
    WHERE id=?
  `;

  db.query(
    sql,
    [
      data.name,
      data.email,
      data.subject,
      data.contact,
      data.category,
      data.message,
      id,
    ],
    callback
  );
};

/* Delete */
exports.deleteContact = (id, callback) => {

  const sql = "DELETE FROM contacts WHERE id=?";

  db.query(sql, [id], callback);
};
