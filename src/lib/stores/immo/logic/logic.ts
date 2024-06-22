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
	computeMortgageMontlyAmount,
	computeMortgageAmountOnmortgagePercent,
	computeMortgagePercentOnmortgageAmount,
	computeAgencyAmount,
	computeAgencyPercent,
	computedepositeAmountOnmortgageAmount,
	computeMortgageAmount,
	computeTotal,
	computeMortgageInsuranceFeesTotal,
	computeMortgageMontlyAmountWithInsurance,
	computeInsuranceAnnuallyFees,
	computeInsuranceMonthyFeesByAnnually,
	computeMortgageAmountFromMonthlyAmount
} from '$lib/stores/immo/logic/maths';

export const initValues = (values: ImmoStore) => {
	values.depositeAmount = computedepositeAmountOndepositePercent(values);
	values.mortgageAmount = computeMortgageAmount(values);
	values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
	values.mortgageMonthlyAmount = computeMortgageMontlyAmount(values);
	values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
	values.notaryFees = computeNotaryFeeAmount(values);
	values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
	values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
	values.mortgageInsuranceAnnuallyFees = computeInsuranceAnnuallyFees(values);
	values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);

	return computeTotal(values);
};

export const updateValues = (field: string, values: ImmoStore) => {
	switch (field) {
		case IMMO_FIELDS.AMOUNT: {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.notaryFees = computeNotaryFeeAmount(values);
			values.agencyFees = computeAgencyAmount(values);
			values.mortgageMonthlyAmount = computeMortgageMontlyAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.DEPOSITE_PERCENT: {
			values.depositeAmount = computedepositeAmountOndepositePercent(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgagePercentOnmortgageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyAmount = computeMortgageMontlyAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceAnnuallyFees = computeInsuranceAnnuallyFees(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.DEPOSITE_AMOUNT: {
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageAmount = computeMortgageAmount(values);
			values.mortgageAmountPercent = computeMortgagePercentOnmortgageAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyAmount = computeMortgageMontlyAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceAnnuallyFees = computeInsuranceAnnuallyFees(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_AMOUNT_PERCENT: {
			values.mortgageAmount = computeMortgageAmountOnmortgagePercent(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyAmount = computeMortgageMontlyAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceAnnuallyFees = computeInsuranceAnnuallyFees(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_AMOUNT: {
			values.mortgageAmountPercent = computeMortgagePercentOnmortgageAmount(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyAmount = computeMortgageMontlyAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceAnnuallyFees = computeInsuranceAnnuallyFees(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_MONTHLY_AMOUNT: {
			values.mortgageAmount = computeMortgageAmountFromMonthlyAmount(values);
			values.mortgageAmountPercent = computeMortgagePercentOnmortgageAmount(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceAnnuallyFees = computeInsuranceAnnuallyFees(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_RATE_PERCENT: {
			values.mortgageAmountPercent = computeMortgagePercentOnmortgageAmount(values);
			values.depositeAmount = computedepositeAmountOnmortgageAmount(values);
			values.depositePercent = computedepositePercentOndepositeAmount(values);
			values.mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed(values);
			values.mortgageMonthlyAmount = computeMortgageMontlyAmount(values);
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceAnnuallyFees = computeInsuranceAnnuallyFees(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
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
			values.mortgageMonthlyAmount = computeMortgageMontlyAmount(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageTotalRateAmount = computeMortgageTotalRateAmount(values);
			values = computeMortgageTotalCost(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_INSURANCE_FEES: {
			values.mortgageInsurancePercent = computeInsuranceFeePercentByAmount(values);
			values.mortgageInsuranceAnnuallyFees = computeInsuranceAnnuallyFees(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_INSURANCE_PERCENT: {
			values.mortgageInsuranceFees = computeMonthyInsuranceFeeByPercent(values);
			values.mortgageInsuranceAnnuallyFees = computeInsuranceAnnuallyFees(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
			break;
		}
		case IMMO_FIELDS.MORTGAGE_INSURANCE_ANNUALLY_FEES: {
			values.mortgageInsuranceFees = computeInsuranceMonthyFeesByAnnually(values);
			values.mortgageInsurancePercent = computeInsuranceFeePercentByAmount(values);
			values.mortgageInsuranceFeesTotal = computeMortgageInsuranceFeesTotal(values);
			values.mortgageMonthlyAmountWithInsurance = computeMortgageMontlyAmountWithInsurance(values);
			break;
		}
	}

	return computeTotal(values);
};
