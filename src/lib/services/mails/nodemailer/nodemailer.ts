import nodemailer from 'nodemailer';
import { EMAIL_USER, EMAIL_PASSWORD } from '$env/static/private';

const transporter = nodemailer.createTransport({
	service: 'Gmail',

	host: 'smtp.gmail.com',
	port: 465,
	secure: true,
	auth: {
		user: EMAIL_USER,
		pass: EMAIL_PASSWORD
	}
});

interface sendMailerArgs {
	to: string;
	subject: string;
	html: string;
	text: string;
}

export const sendMail = async (args: sendMailerArgs) => {
	const { to, subject, text, html } = args;
	console.log('process.env.EMAIL_USER', EMAIL_USER);
	console.log('process.env.EMAIL_PASSWORD', EMAIL_PASSWORD);
	try {
		const info = await transporter.sendMail({
			from: `"Calcule-immo 👻" <${EMAIL_USER}>`,
			to,
			subject,
			text,
			html
		});

		console.log('Message sent: %s', info.messageId);
		return info;
	} catch (e) {
		console.log(e);
	}
};
