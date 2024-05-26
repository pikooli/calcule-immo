import type { ImmoStore } from './immo';
import { IMMO_FIELDS } from '$lib/constants';

import {
	computeNotaryFees,
	computenotaryFees,
	computedepositeAmountOndepositePercent,
	computedepositePercentOndepositeAmount,
	computeMortgageAmountOnmortgagePercent,
	computeMortgageAmountOnmortgageAmount,
	computeAgencyAmount,
	computeAgencyPercent,
	computedepositeAmountOnmortgageAmount,
	computeMortgageAmount,
	computatemortgageTotalRateAmount,
	computeMortgageMontlyRatePercentFixed,
	computeMortgageMontlyRateAmount,
	computeTotal,
	computeTotalMortgageCost
} from './utils';

export const initValues = (values: ImmoStore) => {
	values.depositeAmount = computedepositeAmountOndepositePercent(values);
	values.mortgageAmount = computeMortgageAmount(values);
	values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
	values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
	values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
	values.notaryFees = computeNotaryFees(values);
	values.mortgageInsuranceFeesTotal =
		values.mortgageInsuranceFees * 12 * values.mortgageDurationYears;
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
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.DEPOSITEPERCENT: {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.DEPOSITEAMOUNT: {
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGEAMOUNTPERCENT: {
			values.mortgageAmount = computeMortgageAmountOnmortgagePercent(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGEAMOUNT: {
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGERATEPERCENT: {
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);

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
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			values = computeTotalMortgageCost(values);
			break;
		}
		case IMMO_FIELDS.mortgageINSURANCEFEES: {
			values.mortgageInsuranceFeesTotal =
				values.mortgageInsuranceFees * 12 * values.mortgageDurationYears;
			break;
		}
	}

	return computeTotal(values);
};
