import nodemailer from "nodemailer";
import catchApiErrors from "../../utils/catchApiErrors";
import AbstractApplicationError from "../../utils/AbstractApplicationError";

const sendEmailtoAdmin = catchApiErrors(async (req, res) => {
	const query = {
		Name: req.body.Name,
		Email: req.body.Email,
		Message: req.body.Message,
	};

	const transporter = nodemailer.createTransport({
		service: "gmail",
		auth: {
			user: process.env.HOST_EMAIL,
			pass: process.env.HOST_PASSWORD,
		},
		tls: {
			// do not fail on invalid certs
			rejectUnauthorized: false,
		},
	});

	const mailOptions = {
		from: process.env.HOST_EMAIL,
		to: "tm8683248@gmail.com",
		subject: "Email Sent from Node Mailer for Testing",
		text: `User Name  : ${query.Name}
               User Email : ${query.Email}
               User Message : ${query.Message}`,
	};

	transporter.sendMail(mailOptions, (error, info) => {
		console.log("Email Sent :" + info);
		res.status(200).json({
			status: "Mail Send Successfully",
			requestBody: query,
		});
	});
});
export default sendEmailtoAdmin;
