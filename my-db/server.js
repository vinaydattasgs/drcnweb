const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware to enable CORS and parse JSON requests
app.use(cors());
app.use(express.json());

// API route to handle form submission
app.post('/api/submit', (req, res) => {
  const { name, email, number, message } = req.body;
  
  // Log the form data for now (you can save it to a database or send an email later)
  console.log('Form Data Received:', { name, email, number, message });

  // Respond with success message
  res.status(200).send({
    success: true,
    message: 'Form data received successfully',
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});




// const express = require('express');
// const cors = require('cors');
// const nodemailer = require('nodemailer');

// const app = express();
// const PORT = process.env.PORT || 5000;

// app.use(cors());
// app.use(express.json());

// // Create a Nodemailer transporter using an SMTP server (for example, Gmail)
// const transporter = nodemailer.createTransport({
//   service: 'gmail', // Use 'gmail', 'yahoo', 'hotmail', etc., or configure SMTP settings manually
//   auth: {
//     user: 'missupriya.528@gmail.com', // Your email
//     pass: 'supriya520528', // Your email password (for Gmail, use App Passwords)
//   },
// });

// // API route to handle form submission
// app.post('/api/submit', (req, res) => {
//   const { name, email, number, message } = req.body;

//   // Log form data to the console (you can save this to a database)
//   console.log('Form Data Received:', { name, email, number, message });

//   // Set up the email data
//   const mailOptions = {
//     from: 'missupriya.528@gmail.com', // Sender email address
//     to: email, // Send confirmation email to the user
//     subject: 'Form Submission Confirmation',
//     text: `Thank you for your submission, ${name}! We have received your message: "${message}"`,
//     html: `<h1>Hello, ${name}!</h1><p>We received your message: <b>"${message}"</b>. We will get back to you shortly.</p>`, // HTML version of the email
//   };

//   // Send the email
//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.error('Error sending email:', error);
//       return res.status(500).send({
//         success: false,
//         message: 'Failed to send confirmation email.',
//       });
//     } else {
//       console.log('Email sent:', info.response);
//       return res.status(200).send({
//         success: true,
//         message: 'Form data received and confirmation email sent!',
//       });
//     }
//   });
// });

// // Start the server
// app.listen(PORT, () => {
//   console.log(`Server is running on port ${PORT}`);
// });