let nodemailer = require('nodemailer')

function mailHelpers(email,subject,message){    
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "ngbin5228@gmail.com",
        pass: process.env.NODEMAILER_PASSWORD
    }
});

var mailOptions = {
    from: 'ngbin5228@gmail.com',
    to: 'bintangtopup2@gmail.com',
    subject: subject,
    text: message
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});


}

module.exports = {mailHelpers}