import type { ImmoValues } from './immo';
import { computeAmount, computePercent } from '$lib/utils/math';

export const computeNotaryFees = (values: ImmoValues) =>
	computeAmount(values.amount, values.notaryFeesPercent);
export const computenotaryFees = (values: ImmoValues) =>
	computePercent(values.notaryFees, values.amount);
export const computedepositeAmountOndepositePercent = (values: ImmoValues) =>
	computeAmount(values.amount, values.depositePercent);
export const computedepositePercentOndepositeAmount = (values: ImmoValues) =>
	computeAmount(values.depositeAmount, values.amount);
export const computeMortgageAmountOnMortagePercent = (values: ImmoValues) =>
	computeAmount(values.amount, values.mortgageAmountPercent);
export const computeMortgageAmountOnMortageAmount = (values: ImmoValues) =>
	computePercent(values.mortgageAmount, values.amount);
export const computeAgencyAmount = (values: ImmoValues) =>
	computeAmount(values.amount, values.agencyFeesPercent);
export const computeAgencyPercent = (values: ImmoValues) =>
	computePercent(values.agencyFees, values.amount);
// ==========
export const computedepositeAmountOnMortageAmount = (values: ImmoValues) =>
	values.amount - values.mortgageAmount;
export const computeMortgageAmount = (values: ImmoValues) => values.amount - values.depositeAmount;

export const computateMortageTotalRateAmount = (values: ImmoValues) =>
	Math.round(values.mortgageMonthlyRateAmount * values.mortgageDurationYears * 12) -
	values.mortgageAmount;

// https://www.hellopret.fr/taux-immobilier/calcul-interet-emprunt/#:~:text=Mettons%20que%20vous%20empruntez%20200,x%2020%20%3D%20100%20000%20%E2%82%AC.&text=Soit%20(200%20000%20x%202.5,12%20%3D%20416.7%20%E2%82%AC%20par%20mois.
export const computeMortgageMontlyRatePercent = ({
	mortgageRatePercent
}: {
	mortgageRatePercent: number;
}) => {
	const montlyRate = Math.pow(1 + mortgageRatePercent / 100, 1 / 12) - 1;
	return parseFloat(montlyRate.toFixed(6));
};

interface ComputeMortgageMontlyRateAmountArgs {
	mortgageAmount: number;
	mortgageMonthlyRatePercent: number;
	mortgageDurationYears: number;
}
export const computeMortgageMontlyRateAmount = ({
	mortgageAmount,
	mortgageMonthlyRatePercent,
	mortgageDurationYears
}: ComputeMortgageMontlyRateAmountArgs) => {
	const mortageDurationMonths = mortgageDurationYears * 12;
	const montlyAmount =
		(mortgageAmount *
			mortgageMonthlyRatePercent *
			Math.pow(1 + mortgageMonthlyRatePercent, mortageDurationMonths)) /
		(Math.pow(1 + mortgageMonthlyRatePercent, mortageDurationMonths) - 1);
	return parseFloat(montlyAmount.toFixed(2));
};

export const computeTotal = (values: ImmoValues) => {
	values.total =
		values.depositeAmount + values.notaryFees + values.mortgageAmount + values.agencyFees;

	return values;
};
