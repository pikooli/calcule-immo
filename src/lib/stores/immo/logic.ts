import type { ImmoStore } from './immo';

import {
	computeNotaryFees,
	computenotaryFees,
	computedepositeAmountOndepositePercent,
	computedepositePercentOndepositeAmount,
	computeMortgageAmountOnMortagePercent,
	computeMortgageAmountOnMortageAmount,
	computeAgencyAmount,
	computeAgencyPercent,
	computedepositeAmountOnMortageAmount,
	computeMortgageAmount,
	computateMortageTotalRateAmount,
	computeMortgageMontlyRatePercentFixed,
	computeMortgageMontlyRateAmount,
	computeTotal
} from './utils';

export const initValues = (values: ImmoStore) => {
	values.depositeAmount = computedepositeAmountOndepositePercent(values);
	values.mortgageAmount = computeMortgageAmount(values);
	values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
	values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
	values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
	values.notaryFees = computeNotaryFees(values);
	return computeTotal(values);
};

export const updateValues = (field: string, values: ImmoStore) => {
	switch (field) {
		case 'amount': {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.notaryFees = computeNotaryFees(values);
			values.agencyFees = computeAgencyAmount(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
		case 'depositePercent': {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgageAmountOnMortageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
		case 'depositeAmount': {
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgageAmountOnMortageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
		case 'mortgageAmountPercent': {
			values.mortgageAmount = computeMortgageAmountOnMortagePercent(values);
			values.depositeAmount = computedepositeAmountOnMortageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
		case 'mortgageAmount': {
			values.mortgageAmountPercent = computeMortgageAmountOnMortageAmount(values);
			values.depositeAmount = computedepositeAmountOnMortageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
		case 'mortgageRatePercent': {
			values.mortgageAmountPercent = computeMortgageAmountOnMortageAmount(values);
			values.depositeAmount = computedepositeAmountOnMortageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);

			break;
		}
		case 'agencyFeesPercent': {
			values.agencyFees = computeAgencyAmount(values);
			break;
		}
		case 'agencyFees': {
			values.agencyFeesPercent = computeAgencyPercent(values);
			break;
		}
		case 'notaryFees': {
			values.notaryFeesPercent = computenotaryFees(values);
			break;
		}
		case 'notaryFeesPercent': {
			values.notaryFees = computeNotaryFees(values);
			break;
		}
		case 'mortgageDurationYears': {
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
	}

	return computeTotal(values);
};
