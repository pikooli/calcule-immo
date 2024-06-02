import { fail } from '@sveltejs/kit';
import { sendEmailOfAmortizationSchedule } from '$lib/services/mails';
import { emailAmortizationScheduleValidator } from '$lib/validator';

export const emailAmortizationSchedule = async ({ request }: { request: Request }) => {
	const data = await request.formData();
	const email = data.get('email') as string;
	const termsAndConditions = data.get('termsAndConditions') as string;
	const locale = data.get('locale') as string;
	const immoStore = data.get('immoStore') as string;
	const amortizationScheduleStore = data.get('amortizationScheduleStore') as string;

	try {
		const forms = {
			email,
			immoStore: immoStore ? JSON.parse(immoStore) : null,
			amortizationScheduleStore: amortizationScheduleStore
				? JSON.parse(amortizationScheduleStore)
				: null
		};
		const validator = emailAmortizationScheduleValidator.safeParse(forms);

		if (!validator.success) {
			return fail(422, { email, termsAndConditions, error: true });
		}

		await sendEmailOfAmortizationSchedule({
			to: forms.email,
			locale,
			immoStore: forms.immoStore,
			amortizationScheduleStore: forms.amortizationScheduleStore
		});
	} catch (e) {
		console.log(e);
	}
};
