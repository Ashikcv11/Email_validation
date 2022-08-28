const express= require('express');
const cors  = require('cors');
const path=require('path');
const bodyparser= require('body-parser');
const UserData = require('./model/userData');
const nodemailer = require('nodemailer');

const app = express();



// app.use(express.json());
// app.use(express.urlencoded({extended:false}));
// app.use(cors());
// app.use(bodyparser.urlencoded({ extended: true }));

app.use(cors());
app.use(express.json({urlencoded:true}));

app.use(express.static('dist/frontend'));



app.post('/email',(req,res)=>{
    // alert("connected")
    // console.log('connected')
    res.header("Access-Control-Allow-Origin","*");
    res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE")
    console.log("connected with backedn")
    const randomPin = Math.floor(1000 + Math.random() * 9000);
    var data ={
     email : req.body.email,
     otp:randomPin
    }
    var authData = new UserData(data)
    authData.save().then((data)=>{
   
     var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
          user: 'diwaliwishestoyou@gmail.com',
          pass: 'ppplcytemtgtagtq'
      }
   });
   
   var mailOptions = {
      from: 'diwaliwishestoyou@gmail.com',
      to: data.email,
      subject: 'OTP',
      text: `OTP is ${data.otp}`
   
   };
   
   transporter.sendMail(mailOptions, function(error, info){
      if(error){
          console.log(error);
      } else {
          console.log('email send:'+info.response);
      }
   });
     
     console.log(data)
    res.send(data)
    }
     )
   
   })


// app.listen(PORT,()=>{
//     console.log('server run at port:'+PORT);
// });


// const express = require('express')
// const cors = require('cors')
// const mongoose = require('mongoose')
// const nodemailer = require("nodemailer");
// const Data = require('./model/userData')
// const path = require('path');
// const PORT = 3000


// const app = new express();
// app.use(cors())
// app.use(express.json({urlencoded:true}));

// app.use(express.static('dist/frontend'));



// app.post('/email',(req,res)=>{
//  res.header("Access-Control-Allow-Origin","*");
//  res.header("Access-Control-Allow-Method:GET,POST,PUT,DELETE")
//  const randomPin = Math.floor(1000 + Math.random() * 9000);
//  var data ={
//   email : req.body.email,
//   otp:randomPin
//  }
//  var authdb = new Data(data)
//  authdb.save().then((data)=>{

//   var transporter = nodemailer.createTransport({
//    service: 'gmail',
//    auth: {
//        user: 'diwaliwishestoyou@gmail.com',
//        pass: 'ppplcytemtgtagtq'
//    }
// });

// var mailOptions = {
//    from: 'diwaliwishestoyou@gmail.com',
//    to: data.email,
//    subject: 'OTP',
//    text: `OTP is ${data.otp}`

// };

// transporter.sendMail(mailOptions, function(error, info){
//    if(error){
//        console.log(error);
//    } else {
//        console.log('email send:'+info.response);
//    }
// });
  
//   console.log(data)
//  res.send(data)
//  }
//   )

// })

app.post('/otp',(req,res)=>{
    var data = {
      email:req.body.email,
      otp:req.body.otp
  }
  UserData.findOne({email:data.email,otp:data.otp}).then((data)=>{
   if (data != null ){
    console.log("otp verify",data)
    res.send(data)
   }
   else{
  res.send(null)
   }
   
  })
  })

const PORT=process.env.PORT||3000;

app.listen(PORT,()=>{
    console.log('server run at port:'+PORT);
});