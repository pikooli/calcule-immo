import { fail } from '@sveltejs/kit';
import { sendEmailOfAmortizationSchedule } from '$lib/services/mails';
import type { ImmoStore, immoStore } from '$lib/stores/immo';
import type { AmortizationScheduleStore } from '$lib/stores/amortizationSchedule';

export const actions = {
	sendEmailOfAmortizationSchedule: async ({ request }) => {
		const data = await request.formData();
		const to = data.get('to');
		const email = data.get('email');
		const immoStore = data.get('immoStore') as string;
		const amortizationScheduleStore = data.get('amortizationScheduleStore') as string;
		if (!email || !immoStore || !amortizationScheduleStore) {
			return fail(422, { email, missing: true });
		}
		try {
			await sendEmailOfAmortizationSchedule({
				to: 'zhangpas@gmail.com',
				locale: 'fr',
				immoStore: JSON.parse(immoStore),
				amortizationScheduleStore: JSON.parse(amortizationScheduleStore)
			});
		} catch (e) {
			console.log(e);
		}
	}
};
