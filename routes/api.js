const app = require('../app');
const config = require('../private/config')
const express = require('express');
const router = express.Router();
const GithubCommits = require('../includes/GithubCommits');
const mail = require('nodemailer');

const localTransporter = mail.createTransport();
const transporter = mail.createTransport({
    host: "andythedeveloper.com",
    secure: false,
    port: 465,
    auth: config.email,
	 tls:{
		 rejectUnauthorized: false
	 }
});

// handlebars
var hbs = require('nodemailer-express-handlebars');
var options = {
	viewEngine: {
		extname: '.hbs',
		layoutsDir: 'views/email/',
		defaultLayout : 'template'
	},
	viewPath: 'views/email/',
	extName: '.hbs'
};

// Github commit cacher
const commit = new GithubCommits('andyrichardson', 60000 * 30);
commit.startCaching();

router.route('/github/commits')
.get(function(req, res, end){
	const result = commit.getResult();

	if(result == 'error'){
		res.writeHead(500);
		return res.end();
	}

	res.writeHead(200, { 'Content-Type': 'application/json' });
	res.end(JSON.stringify({ result: result}));
});

// Email submission
router.route('/mail/sendmessage')
.post(function(req, res, end){
	var enquirynum = 10;

	// Create message for local email
	var text = "";
	if(req.body.number){
		text = 'Number: ' + req.body.number + '\n';
	}
	text += req.body.message;

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

		res.writeHead(200, 'Content-Type: application/json');
		return res.end('{}');
	});

	// Render and send confirmation
	transporter.use('compile', hbs(options));
	transporter.sendMail({
		from: '"Andy Richardson" <contact@andythedeveloper.com>',
		to: req.body.email,
		subject: 'Enquiry #' + enquirynum + ": " + req.body.subject,
		template: 'template',
		context: req.body
	}, function(error){
		if(error){
			console.log(error);
		}
	});


})

module.exports = router;
