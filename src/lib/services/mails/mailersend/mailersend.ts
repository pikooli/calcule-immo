import { MAILERSEND_API_KEY, MAILERSEND_EMAIL } from '$env/static/private';
import { MailerSend, EmailParams, Attachment, Sender, Recipient } from 'mailersend';

const mailerSend = new MailerSend({
	apiKey: MAILERSEND_API_KEY
});
interface SendEmailArgs {
	to: string;
	subject: string;
	text: string;
	html: string;
	attachments?: Attachment[];
}

export const sendMail = async (args: SendEmailArgs) => {
	const { to, subject, text, html, attachments } = args;

	const sentFrom = new Sender(MAILERSEND_EMAIL, 'Calcule-immo 👻');

	const recipients = [new Recipient(to, to)];
	const emailParams = new EmailParams()
		.setFrom(sentFrom)
		.setTo(recipients)
		.setSubject(subject)
		.setHtml(html)
		.setText(text);

	if (attachments?.length) {
		emailParams.setAttachments(attachments);
	}
	try {
		const response = await mailerSend.email.send(emailParams);
		console.log('Message sent: %s', response);
	} catch (e) {
		console.log(e);
		throw e;
	}
};
