import type { ImmoStore } from './immo';
import { IMMO_FIELDS } from '$lib/constants';

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
		case IMMO_FIELDS.AMOUNT: {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.notaryFees = computeNotaryFees(values);
			values.agencyFees = computeAgencyAmount(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.DEPOSITEPERCENT: {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgageAmountOnMortageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.DEPOSITEAMOUNT: {
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgageAmountOnMortageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGEAMOUNTPERCENT: {
			values.mortgageAmount = computeMortgageAmountOnMortagePercent(values);
			values.depositeAmount = computedepositeAmountOnMortageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGEAMOUNT: {
			values.mortgageAmountPercent = computeMortgageAmountOnMortageAmount(values);
			values.depositeAmount = computedepositeAmountOnMortageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGERATEPERCENT: {
			values.mortgageAmountPercent = computeMortgageAmountOnMortageAmount(values);
			values.depositeAmount = computedepositeAmountOnMortageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);

			break;
		}
		case IMMO_FIELDS.AGENCYFEESPERCENT: {
			values.agencyFees = computeAgencyAmount(values);
			break;
		}
		case IMMO_FIELDS.AGENCYFEES: {
			values.agencyFeesPercent = computeAgencyPercent(values);
			break;
		}
		case IMMO_FIELDS.NOTARYFEES: {
			values.notaryFeesPercent = computenotaryFees(values);
			break;
		}
		case IMMO_FIELDS.NOTARYFEESPERCENT: {
			values.notaryFees = computeNotaryFees(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGEDURATIONYEARS: {
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortageTotalRateAmount = computateMortageTotalRateAmount(values);
			break;
		}
	}

	return computeTotal(values);
};
