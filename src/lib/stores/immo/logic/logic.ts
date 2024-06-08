import type { ImmoStore } from '$lib/stores/immo';
import { IMMO_FIELDS } from '$lib/constants';
import {
	computeMortgageTotalCost,
	computeNotaryFeeAmount,
	computenotaryFeePercent,
	computeMonthyInsuranceFeeByPercent,
	computeInsuranceFeePercentByAmount,
	computedepositeAmountOndepositePercent,
	computedepositePercentOndepositeAmount,
	computeMortgageTotalRateAmount,
	computeMortgageMontlyRatePercentFixed,
	computeMortgageMontlyRateAmount,
	computeMortgageAmountOnmortgagePercent,
	computeMortgageAmountOnmortgageAmount,
	computeAgencyAmount,
	computeAgencyPercent,
	computedepositeAmountOnmortgageAmount,
	computeMortgageAmount,
	computeTotal,
	computeMortgageInsuranceFeesTotal
} from '$lib/stores/immo/logic/maths';

export const initValues = (values: ImmoStore) => {
	values.depositeAmount = computedepositeAmountOndepositePercent(values);
	values.mortgageAmount = computeMortgageAmount(values);
	values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
	values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
	values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
	values.notaryFees = computeNotaryFeeAmount(values);
	values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
	values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
	values.mortgageMonthlyRateAmountWithInsurance =
		values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;

	return computeTotal(values);
};

export const updateValues = (field: string, values: ImmoStore) => {
	switch (field) {
		case IMMO_FIELDS.AMOUNT: {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.notaryFees = computeNotaryFeeAmount(values);
			values.agencyFees = computeAgencyAmount(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.DEPOSITE_PERCENT: {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.DEPOSITE_AMOUNT: {
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_AMOUNT_PERCENT: {
			values.mortgageAmount = computeMortgageAmountOnmortgagePercent(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_AMOUNT: {
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_RATE_PERCENT: {
			values.mortgageAmountPercent = computeMortgageAmountOnmortgageAmount(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);

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
			values.notaryFeesPercent = computenotaryFeePercent(values);
			break;
		}
		case IMMO_FIELDS.NOTARY_FEES_PERCENT: {
			values.notaryFees = computeNotaryFeeAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_DURATION_YEARS: {
			values.mortgageMonthlyRateAmount = computeMortgageMontlyRateAmount(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			values = computeMortgageTotalCost(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_INSURANCE_FEES: {
			values.mortgageInsurancePercent = computeInsuranceFeePercentByAmount(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyRateAmountWithInsurance =
				values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			break;
		}
		case IMMO_FIELDS.MORTGAGE_INSURANCE_PERCENT: {
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
			break;
		}
	}

	return computeTotal(values);
};
