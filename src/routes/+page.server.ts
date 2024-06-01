import * as db from '$lib/server/db.js';
import { sendMail } from '$lib/services/mails';

export function load({ cookies }) {
	return {
		data: db.getData(),
		aaa: 'aaaa'
	};
}

export const actions = {
	sendEmail: async ({ cookies, request }) => {
		const data = await request.formData();
		try {
			const info = await sendMail({
				to: 'zhangpas@gmail.com', // list of receivers
				subject: 'Hello ✔', // Subject line
				text: 'Hello world?', // plain text body
				html: '<b>Hello world?</b>' // html body
			});

			console.log('Message sent: %s', info?.messageId);
		} catch (e) {
			console.log(e);
		}

		console.log(data);
	}
};
