// Exercise 5 — Sending an email with Nodemailer
// Run with: node email-sender.js
// Docs: https://www.w3schools.com/nodejs/nodejs_email.asp
//
// Gmail needs an "App Password" (your normal password will be rejected):
//   1. Enable 2-Step Verification on your Google account.
//   2. Create an app password at https://myaccount.google.com/apppasswords
//   3. Export your credentials, then run the script:
//        export EMAIL_USER="you@gmail.com"
//        export EMAIL_PASS="your-app-password"
//        export EMAIL_TO="you@gmail.com"   # optional, defaults to the sender
//        node email-sender.js

const nodemailer = require("nodemailer");

const user = process.env.EMAIL_USER;
const pass = process.env.EMAIL_PASS;
const to = process.env.EMAIL_TO || user;

if (!user || !pass) {
  console.error(
    "Missing credentials. Set them before running, e.g.:\n" +
      '  export EMAIL_USER="you@gmail.com"\n' +
      '  export EMAIL_PASS="your-app-password"\n' +
      "  node email-sender.js"
  );
  process.exit(1);
}

// Create a transporter object using the Gmail service
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user, pass },
});

const mailOptions = {
  from: user,
  to,
  subject: "Hello from Node.js",
  text: "Hi there!\n\nThis email was sent with Nodemailer from my Node.js app.",
};

transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.error("Error while sending the email:", error.message);
  } else {
    console.log("Email sent successfully:", info.response);
  }
});
