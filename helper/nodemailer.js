let nodemailer = require('nodemailer')

function mailHelpers(){    
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "ngbin5228@gmail.com",
        pass: process.env.NODEMAILER_PASSWORD
    }
});

var mailOptions = {
    from: 'ngbin5228@gmail.com',
    to: "mybintangg@gmail.com",
    subject: 'Sending Email using Nodejs',
    text: 'That was easy!'
};

transporter.sendMail(mailOptions, (err, info) => {
    if (err) throw err;
    console.log('Email sent: ' + info.response);
});


}

module.exports = {mailHelpers}