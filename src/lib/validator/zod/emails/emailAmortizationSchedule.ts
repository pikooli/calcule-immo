import { z } from 'zod';
import { amortizationScheduleValidator, immoValidator } from '$lib/validator/zod/stores';

export const emailAmortizationScheduleValidator = z.object({
	email: z.string().email(),
	immoStore: immoValidator,
	amortizationScheduleStore: amortizationScheduleValidator
});
