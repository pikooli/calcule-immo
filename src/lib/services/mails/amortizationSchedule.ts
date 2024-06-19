import { get } from 'svelte/store';
import { t, waitLocale } from 'svelte-i18n';
import { setLocale } from '$lib/i18n';
import { sendMail } from '$lib/services/mails';
import type { AmortizationScheduleStore } from '$lib/stores/amortizationSchedule';
import type { ImmoStore } from '$lib/stores/immo';
import { generateAmortizationScheduleBuffer } from '$lib/services/pdf/jsPdf/amortizationSchedule';
import { PUBLIC_PROD_URL } from '$env/static/public';
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
	await waitLocale();

	const i18n = get(t);

	try {
		const pdfBuffer = await generateAmortizationScheduleBuffer({
			immoStore,
			amortizationScheduleStore
		});
		const mailOptions = {
			to,
			subject: i18n('emails.amortizationSchedule.subject'),
			text: i18n('emails.amortizationSchedule.text', {
				values: {
					url: PUBLIC_PROD_URL
				}
			}),
			html: i18n('emails.amortizationSchedule.html', {
				values: {
					url: PUBLIC_PROD_URL
				}
			}),
			attachments: [
				{
					filename: 'amortizationSchedule.pdf',
					content: pdfBuffer.toString('base64'),
					contentType: 'application/pdf',
					disposition: 'attachment'
				}
			]
		};
		await sendMail(mailOptions);
	} catch (e) {
		console.log(e);
		throw e;
	}
};
