const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();
const app = express();
const error = require("./middlewares/errors");

mongoose.Promise = global.Promise;
var port = 4000 || process.env.port;
var MONGO_URL = "mongodb+srv://aji:uL4K73naic18DzEB@cluster0.cw6ni6l.mongodb.net/enterprise?retryWrites=true&w=majority";
mongoose.set('strictQuery', false);
mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(
    () => {
        console.log("Connected to database enterprise");
    },
    (error) => {
        console.log("Disconnect from database enterprise" + error);
    }
);


app.use(cors());
app.use(express.json());
app.use("/api", require("./routes/app.routes"));
app.use(error.errorHandler);


app.get("/product", (req, res)=>{
    res.sendFile(__dirname + '/Pages/product.html');
});

app.get("/career", (req, res)=>{
    res.sendFile(__dirname + '/Pages/career.html');
});

app.get("/contact", (req, res)=>{
    res.sendFile(__dirname + '/Pages/contact.html');
});

app.get("/", (req, res)=>{
  res.sendFile(__dirname + '/Pages/index.html');
});

app.use(express.static(__dirname + '/Pages'));

//Email

const gmailEmail = 'agustushapus@gmail.com';
const gmailPassword = 'gacxfoqhqbfeuurt';

app.post('/send-email', async (req, res) => {
    const { to, subject, text } = req.body;
  
    try {
      // Konfigurasi transporter
      const transporter = nodemailer.createTransport({
        host : 'smtp.gmail.com',
        port: 587,
        auth: {
          user: gmailEmail,
          pass: gmailPassword,
        },
      });
  
      // Konfigurasi email yang akan dikirim
      const mailOptions = {
        from: gmailEmail,
        to: to,
        subject: subject,
        text: text,
      };
  
      // Kirim email
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent:', info.response);
      res.status(200).json({ message: 'Email sent successfully' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Failed to send email' });
    }
  });

app.use("/", (req, res)=>{
    res.send("No Pages");
})

app.listen(port, function () {
    console.log("Connected to ", port);
});