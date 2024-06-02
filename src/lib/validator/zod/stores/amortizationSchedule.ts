import { z } from 'zod';

export const monthScheduleValidator = z.object({
	month: z.number(),
	monthlyPayment: z.number(),
	monthlyInterest: z.number(),
	monthMortgagePayment: z.number(),
	remainingCapital: z.number(),
	mortgageInsuranceFees: z.number()
});

export const yearScheduleValidator = z.object({
	year: z.number(),
	monthSchedule: monthScheduleValidator.array(),
	yearInterest: z.number(),
	yearPayment: z.number(),
	remainingCapital: z.number(),
	mortgageInsuranceFees: z.number(),
	yearMortgagePayment: z.number()
});

export const amortizationScheduleValidator = yearScheduleValidator.array();
