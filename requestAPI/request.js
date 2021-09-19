const nodemailer = require("nodemailer");
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// create reusable transporter object using the default SMTP transport
let transporter = nodemailer.createTransport({
	service: "gmail",
	auth: {
		user: "d.mehedov2@gmail.com", // generated ethereal user
		pass: "dZ4qV5tZ" // generated ethereal password
	},
});


const express = require('express')
const app = express()
const port = 3010

app.get('/', (req, res) => {
	res.send('Hello World!')
})

app.post('/sendMessage', async (req, res) => {

	let {name, contact, message} =req.body

	// send mail with defined transport object
	let info = await transporter.sendMail({
		from: "HR", // sender address
		to: "mekhedov.d@mail.ru", // list of receivers
		subject: "Testing GMAIL", // Subject line
		html: `<b>Message from your portfolio page</b>
			<div>name: ${name}</div>
			<div>contact: ${contact}</div>
			<div>${message}</div>`
	});

	console.log("Message sent: %s", info.messageId);

	res.send('ok');
})

app.listen(port, () => {
	console.log(`Example app listening at http://localhost:${port}`)
})

