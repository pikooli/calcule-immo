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

export const sendMail = async (args: nodemailer.SendMailOptions) => {
	const { to, subject, text, html, attachments } = args;

	try {
		const info = await transporter.sendMail({
			from: `"Calcule-immo 👻" <${EMAIL_USER}>`,
			to,
			subject,
			text,
			html,
			attachments
		});

		console.log('Message sent: %s', info.messageId);
		return info;
	} catch (e) {
		console.log(e);
	}
};
