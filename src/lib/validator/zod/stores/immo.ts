import { z } from 'zod';

export const immoValidator = z.object({
	amount: z.number(),
	depositePercent: z.number(),
	depositeAmount: z.number(),
	mortgageAmount: z.number(),
	mortgageAmountPercent: z.number(),
	mortgageDurationYears: z.number(),
	mortgageRatePercent: z.number(),
	mortgageMonthlyRatePercent: z.number(),
	mortgageMonthlyRateAmount: z.number(),
	mortgageMonthlyRateAmountWithInsurance: z.number(),
	mortgageTotalRateAmount: z.number(),
	mortgageInsuranceFees: z.number(),
	mortgageInsurancePercent: z.number(),
	mortgageInsuranceFeesTotal: z.number(),
	agencyFees: z.number(),
	agencyFeesPercent: z.number(),
	notaryFees: z.number(),
	notaryFeesPercent: z.number(),
	lastUpdated: z.string(),
	totalMortgageCost: z.number(),
	total: z.number()
});
