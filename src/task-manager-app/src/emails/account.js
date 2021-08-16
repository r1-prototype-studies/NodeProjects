const sgMail = require('@sendgrid/mail');

const sendGridAPIKey = process.env.SENDGRID_API_KEY;

sgMail.setApiKey(sendGridAPIKey);
const msg = {
	to: 'fosiba8728@cytsl.com', // Change to your recipient
	from: 'fosiba8728@cytsl.com', // Change to your verified sender
	subject: 'This is my first creation!',
	text: 'and easy to do anywhere, even with Node.js',
	html: '<strong>and easy to do anywhere, even with Node.js</strong>',
};

const sendWelcomeEmail = (email, name) => {
	const msg = {
		to: 'fosiba8728@cytsl.com', // Change to your recipient
		from: 'fosiba8728@cytsl.com', // Change to your verified sender
		subject: `Sending email to ${email}`,
		text: `Welcome ${name}`,
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch(error => {
			console.error(error);
		});
};

const sendByeEmail = (email, name) => {
	const msg = {
		to: 'fosiba8728@cytsl.com', // Change to your recipient
		from: 'fosiba8728@cytsl.com', // Change to your verified sender
		subject: `Bye email to ${email}`,
		text: `Bye Bye ${name}`,
		html: '<strong>and easy to do anywhere, even with Node.js</strong>',
	};

	sgMail
		.send(msg)
		.then(() => {
			console.log('Email sent');
		})
		.catch(error => {
			console.error(error);
		});
};

module.exports = { sendEmail: sendWelcomeEmail, sendByeEmail };
