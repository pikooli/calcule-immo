import type { ImmoStore } from '$lib/stores/immo';
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
} from '$lib/stores/immo/logic/utils';
import {
	computeMonthyInsuranceFeeByPercent,
	computeInsuranceFeePercentByAmount
} from '$lib/stores/immo/logic/maths';

export const initValues = (values: ImmoStore) => {
	values.depositeAmount = computedepositeAmountOndepositePercent(values);
	values.mortgageAmount = computeMortgageAmount(values);
	values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
	values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
	values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
	values.mortgageMonthlyRateAmountWithInsurance =
		values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
	values.notaryFees = computeNotaryFees(values);
	values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
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
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.DEPOSITE_PERCENT: {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.DEPOSITE_AMOUNT: {
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_AMOUNT_PERCENT: {
			values.mortgageAmount = computeMortgageAmountOnmortgagePercent(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_AMOUNT: {
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_RATE_PERCENT: {
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);

			break;
		}
		case IMMO_FIELDS.AGENCY_FEES_PERCENT: {
			values.agencyFees = computeAgencyAmount(values);
			break;
		}
		case IMMO_FIELDS.AGENCY_FEES: {
			values.agencyFeesPercent = computeAgencyPercent(values);
			break;
		}
		case IMMO_FIELDS.NOTARY_FEES: {
			values.notaryFeesPercent = computenotaryFees(values);
			break;
		}
		case IMMO_FIELDS.NOTARY_FEES_PERCENT: {
			values.notaryFees = computeNotaryFees(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_DURATION_YEARS: {
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computatemortgageTotalRateAmount(values);
			values = computeTotalMortgageCost(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_INSURANCE_FEES: {
			values.mortgageInsurancePercent = computeInsuranceFeePercentByAmount(values);
			values.mortgageInsuranceFeesTotal =
				values.mortgageInsuranceFees * 12 * values.mortgageDurationYears;
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			break;
		}
		case IMMO_FIELDS.MORTGAGE_INSURANCE_PERCENT: {
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceFeesTotal =
				values.mortgageInsuranceFees * 12 * values.mortgageDurationYears;
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			break;
		}
	}

	return computeTotal(values);
};
