import { fail } from '@sveltejs/kit';
import { t } from 'svelte-i18n';
import { setLocale } from '$lib/i18n';
import { get } from 'svelte/store';
import { sendEmailOfAmortizationSchedule } from '$lib/services/mails';
import { emailAmortizationScheduleValidator } from '$lib/validator';

export const emailAmortizationSchedule = async ({ request }: { request: Request }) => {
	const data = await request.formData();
	const email = data.get('email') as string;
	const termsAndConditions = data.get('termsAndConditions') as string;
	const locale = data.get('locale') as string;
	await setLocale(locale);
	const i18n = get(t);
	const immoStore = data.get('immoStore') as string;
	const amortizationScheduleStore = data.get('amortizationScheduleStore') as string;

	try {
		const form = {
			email,
			immoStore: immoStore ? JSON.parse(immoStore) : null,
			amortizationScheduleStore: amortizationScheduleStore
				? JSON.parse(amortizationScheduleStore)
				: null
		};
		const validator = emailAmortizationScheduleValidator.safeParse(form);

		if (!validator.success) {
			return fail(422, {
				email,
				termsAndConditions,
				error: true,
				immoStore,
				errorMessage: i18n('errors.emailAmortizationSchedule')
			});
		}

		await sendEmailOfAmortizationSchedule({
			to: form.email,
			locale,
			immoStore: form.immoStore,
			amortizationScheduleStore: form.amortizationScheduleStore
		});

		return { success: true, successMessage: i18n('success.emailAmortizationSchedule') };
	} catch (e) {
		console.log(e);
	}
};
