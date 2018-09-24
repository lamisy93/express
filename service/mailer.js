function sendMail(mailOptions) {
    const mailer = require("nodemailer");
  // Generate test SMTP service account from ethereal.email
  // Only needed if you don't have a real mail account for testing
  // nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
    var transporter =  mailer.createTransport(
      {
        service: 'outlook',
        host: 'smtp-mail.outlook.com',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: 'testform@outlook.fr', // generated ethereal user
            pass: 'testnodemailer93' // generated ethereal password
        }
    });
  
    // setup email data with unicode symbols
    // let mailOptions = {
    //     from: email, // sender address
        // to: 'testform@outlook.fr', // list of receivers
        // subject: object, // Subject line
        // text: message, // plain text body
  
    // };

    //return console.log(transporter)
    mailOptions.to = transporter.options.auth.user;


    mailOptions.html = '<b>' + mailOptions.message + '</b>';
  
    console.log(mailOptions)
  
    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: ' + info.response);
        // console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        // console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  
        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });
  
  
    transporter.close();
  
  }
  
  module.exports = sendMail;
  
    