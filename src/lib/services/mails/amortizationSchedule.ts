import { get } from 'svelte/store';
import { t } from 'svelte-i18n';
import { setLocale } from '$lib/i18n';
import { sendMail } from '$lib/services/mails';
import type { AmortizationScheduleStore } from '$lib/stores/amortizationSchedule';
import type { ImmoStore } from '$lib/stores/immo';
import { generateAmortizationScheduleBuffer } from '$lib/services/pdf/jsPdf/amortizationSchedule';

interface SendEmailOfAmortizationScheduleArgs {
	to: string;
	locale: string;
	immoStore: ImmoStore;
	amortizationScheduleStore: AmortizationScheduleStore;
}

export const sendEmailOfAmortizationSchedule = async ({
	to,
	locale,
	immoStore,
	amortizationScheduleStore
}: SendEmailOfAmortizationScheduleArgs) => {
	await setLocale(locale);
	const i18n = get(t);

	try {
		const pdfBuffer = generateAmortizationScheduleBuffer({
			immoStore,
			amortizationScheduleStore
		});

		const mailOptions = {
			to,
			subject: i18n('emails.amortizationSchedule.subject'),
			text: i18n('emails.amortizationSchedule.text'),
			html: i18n('emails.amortizationSchedule.html'),
			attachments: [
				{
					filename: 'amortizationSchedule.pdf',
					content: pdfBuffer,
					contentType: 'application/pdf'
				}
			]
		};

		const info = await sendMail(mailOptions);

		console.log('Message sent: %s', info?.messageId);
	} catch (e) {
		console.log(e);
		throw e;
	}
};
