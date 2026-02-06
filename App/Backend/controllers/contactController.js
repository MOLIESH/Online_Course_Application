const Contact = require("../models/contactModel");
const nodemailer = require("nodemailer");


/* ==========================
   EMAIL CONFIG
========================== */

const transporter = nodemailer.createTransport({

  service: "gmail",

  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },

});


/* ==========================
   SEND AUTO REPLY
========================== */

const sendAutoReply = async (email, name) => {

  const mailOptions = {

    from: `"Digitivity Support" <${process.env.EMAIL_USER}>`,

    to: email,

    subject: "We Received Your Message",

    html: `
      <h2>Hello ${name},</h2>

      <p>Thank you for contacting Digitivity.</p>

      <p>
        We have received your message and
        <b>will review your case as soon as possible.</b>
      </p>

      <p>Our support team will contact you shortly.</p>

      <br/>

      <p>Regards,<br/><b>Digitivity Team</b></p>
    `,
  };


  await transporter.sendMail(mailOptions);
};



/* ====================
   CREATE
==================== */

const createContact = (req, res) => {

  // Add date & time
  const contactData = {
    ...req.body,
    created_at: new Date() // current date & time
  };

  Contact.createContact(contactData, async (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    try {

      const { name, email } = contactData;

      // Send Auto Reply
      await sendAutoReply(email, name);

    } catch (mailError) {

      console.error("Mail Error:", mailError);

    }

    res.json({
      message: "Contact Saved Successfully. Confirmation Email Sent.",
    });

  });

};


/* ====================
   READ ALL
==================== */

const getContacts = (req, res) => {

  Contact.getAllContacts((err, data) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(data);
  });
};



/* ====================
   READ ONE
==================== */

const getContact = (req, res) => {

  const id = req.params.id;

  Contact.getContactById(id, (err, data) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(data[0]);
  });
};



/* ====================
   UPDATE
==================== */

const updateContact = (req, res) => {

  const id = req.params.id;

  Contact.updateContact(id, req.body, (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Contact Updated Successfully",
    });
  });
};



/* ====================
   DELETE
==================== */

const deleteContact = (req, res) => {

  const id = req.params.id;

  Contact.deleteContact(id, (err) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json({
      message: "Contact Deleted Successfully",
    });
  });
};



/* ====================
   EXPORT
==================== */

module.exports = {
  createContact,
  getContacts,
  getContact,
  updateContact,
  deleteContact,
};
