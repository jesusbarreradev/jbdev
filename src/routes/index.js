const express = require('express');
const path = require('path');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const router = express.Router();

require('dotenv').config()

// create application/json parser
var jsonParser = bodyParser.json();

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: false });


module.exports = app => {
  app.get('/', (req, res) => {
    res.render("index");
  });
  // app.get('/index.html', (req, res) => {
  //   res.sendFile(path.join(__dirname + '/../views/index.html'));
  // });

//   app.get('/about.html', (req, res) => {
//     res.sendFile(path.join(__dirname + '/../views/about.html'));
//   });

//   app.get('/contact.html', (req, res) => {
//     res.sendFile(path.join(__dirname + '/../views/contact.html'));
//   });

//   app.post('/contact.html', urlencodedParser, (req, res) => {

//     const name = req.body.name;
//     const email = req.body.email;
//     const message = req.body.message;

//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//           user: process.env.serverEmail,
//           pass: process.env.serverPassword
//       }
//     });

//   var mailOptions = {
//     from: process.env.serverEmail,
//     to: process.env.serverEmail,
//     subject: "Nuevo Correo",
//     text: "¡Alguien se puso en contacto! Su nombre es" + name + " con correo " + email + " y dejo el mensaje: " + message
//   };

//   transporter.sendMail(mailOptions, function (error, info) {
//       if (error) {
//           console.log(error);
//       } else {
//           console.log('Email sent: ' + info.response);
//           res.redirect("/contact.html");
//       }
//   });


// });

//   app.get('/portfolio.html', (req, res) => {
//     res.sendFile(path.join(__dirname + '/../views/portfolio.html'));
//   });

  // app.use((req, res, next) => {
  //   res.status(404).render("error404")
  // });
}
