const express = require('express');
const router = express.Router();
const config = require('../private/config')
const mail = require('nodemailer');

// Mail templating
var hbs = require('nodemailer-express-handlebars');
var options = {
	viewEngine: {
		extname: '.hbs',
		layoutsDir: 'server/views/email/',
		defaultLayout : 'template'
	},
	viewPath: 'server/views/email/',
	extName: '.hbs'
};

// Mail transporters
const localTransporter = mail.createTransport();
const transporter = mail.createTransport({
	sendmail: true,
	host: "mail.andythedeveloper.com",
	newline: 'unix',
	path: '/usr/sbin/sendmail'
});
transporter.use('compile', hbs(options));

// Email submission
router.route('/')
.post(function(req, res, end){
	// Create message for local email
	var text = "";
	if(req.body.number){
		text = 'Number: ' + req.body.number + '\n';
	}
	text += req.body.message;

	transporter.sendMail({
		from: '"Andy Richardson" <contact@andythedeveloper.com>',
		to: req.body.email,
		subject: 'Enquiry: ' + req.body.subject,
		template: 'template',
		context: req.body
	}, function(error){
		if(error){
			console.log(error);
		}
	});

	localTransporter.sendMail({
		from: `"${req.body.first_name} ${req.body.last_name} ${req.body.email}"`,
		to: '"Andy Richardson" <contact@andythedeveloper.com>',
		subject: 'Enquiry: ' + req.body.subject,
		text: text
	}, function(err){
		if(err){
			console.log(err);
			res.writeHead(500);
			return res.end();
		}

		return res.end('{}');
	});
});

module.exports = router;
