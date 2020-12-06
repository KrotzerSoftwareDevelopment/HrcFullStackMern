var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');
var cors = require('cors');
const creds = require('./mailConfig');

var transport = {
    host: 'smtp.gmail.com', 
    port: 587,
    auth: {
    user: creds.USER,
    pass: creds.PASS
  }
}

var transporter = nodemailer.createTransport(transport)

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Server is ready to take messages');
  }
});

router.post('/send', (req, res, next) => {
  var firstName = req.body.firstName
  var lastName = req.body.lastName
  var phone = req.body.phone
  var email = req.body.email
  var message = req.body.message
  var content = `Thank you ${firstName} ${lastName}, for contacting Home Raised Cairns!\n
  Please allow 1 to 4 business days for a response.\n
  For a quicker reply, please contact me by phone: (541) 819-9410\n
  \nHere is a Copy of your submission to Home Cairns: \n First Name: ${firstName}\n Last Name: ${lastName}  \n Phone Number: ${phone}\n Email: ${email}\n Message: ${message} `

  var mail = {
    from: firstName,
    to: "homeraisedcustomercare@gmail.com",  
    subject: 'Home Raised Cairns ',
    text: content
  }

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        status: 'fail'
      })
    } else {
      res.json({
       status: 'success'
      })
      transporter.sendMail({
        from: "homeraisedcutomercare@gmail.com",
        to: email,
        subject:`Home Raised Cairns - ${firstName}${lastName}`,
        text: `Thank you ${firstName} ${lastName}, for your interest, as well as time and for contacting Home Raised Cairns!\n
        Please allow 1 to 4 buissness days for a response.\n
        For a quicker reply, please contact me by phone: (541) 819-9410
      \n Here is a of your submittion to Home Raised Cairns:
    \n Your First Name: ${firstName}\n Last Name: ${lastName} \n Phone Number: ${phone}\n Email: ${email}\n Message: ${message}`
        
        
   
      }, function (error, info){
        if(error) {
          console.log(error);
        } else{
          console.log('Thank You for your time and interest! \n Home Raised Cairns sent your message successfully: ' + info.response);
        }
      });

    }
  })
})

const app = express()
app.use(cors())
app.use(express.json())
app.use('/', router)
app.listen(3002)