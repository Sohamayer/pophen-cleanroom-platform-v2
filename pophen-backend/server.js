const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

app.post("/send-contact", async (req, res) => {
  const { name, email, phone, company, message } = req.body;

  try {

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    // Email to CLIENT (Pophen)
    const clientMail = {
      from: email,
      to: process.env.CLIENT_EMAIL,
      subject: "New Contact Form Submission",
      html: `
        <h2>New Inquiry Received</h2>

        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Company:</strong> ${company}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    };

    // Email to USER
    const userMail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Thank you for contacting Pophen India",
      html: `
        <h2>Thank you for reaching out!</h2>

        <p>Hi ${name},</p>

        <p>We have received your inquiry and our team will respond within 24 hours.</p>

        <p>Best Regards,<br>
        Pophen India Team</p>
      `
    };

    await transporter.sendMail(clientMail);
    await transporter.sendMail(userMail);

    res.status(200).json({ success: true });

  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false });
  }
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});