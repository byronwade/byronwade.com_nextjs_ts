require('dotenv').config()
const nodemailer = require('nodemailer')

export default async (req, res) => {
	const { name, email, phone, body } = req.body

	// const transporter = nodemailer.createTransport({
	// 	service: 'gmail',
	// 	auth: {
	// 		user: process.env.EMAIL || 'bcw1995@gmail.com',
	// 		pass: process.env.PASSWORD || 'byronwade1995',
	// 	},
	// })

	let testAccount = await nodemailer.createTestAccount()

	// create reusable transporter object using the default SMTP transport
	let transporter = nodemailer.createTransport({
		host: 'smtp.ethereal.email',
		port: 587,
		secure: false, // true for 465, false for other ports
		auth: {
			user: testAccount.user, // generated ethereal user
			pass: testAccount.pass, // generated ethereal password
		},
	})

	const info = await transporter.sendMail({
		from: `${email}`,
		to: `${process.env.EMAIL || 'bcw1995@gmail.com'}`,
		subject: `New mail from ${email}`,
		text: `
    ${name} <br>
    ${phone} <br>
    ${body}
    `,
	})

	// transporter.sendMail(mailOption, (err, data) => {
	// 	if (err) {
	// 		console.log(err)
	// 		res.send('error' + JSON.stringify(err))
	// 	} else {
	// 		console.log('mail send')
	// 		res.send('success')
	// 	}
	// })

	console.log('Message sent: %s', info.messageId)
	// Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

	// Preview only available when sending through an Ethereal account
	console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info))
	// Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...

	res.send('success')
}
