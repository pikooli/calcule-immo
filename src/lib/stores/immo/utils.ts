import type { ImmoStore } from './immo';
import { computeAmount, computePercent } from '$lib/utils/math';

export const computeNotaryFees = (values: ImmoStore) =>
	computeAmount(values.amount, values.notaryFeesPercent);
export const computenotaryFees = (values: ImmoStore) =>
	computePercent(values.notaryFees, values.amount);
export const computedepositeAmountOndepositePercent = (values: ImmoStore) =>
	computeAmount(values.amount, values.depositePercent);
export const computedepositePercentOndepositeAmount = (values: ImmoStore) =>
	computeAmount(values.depositeAmount, values.amount);
export const computeMortgageAmountOnMortagePercent = (values: ImmoStore) =>
	computeAmount(values.amount, values.mortgageAmountPercent);
export const computeMortgageAmountOnMortageAmount = (values: ImmoStore) =>
	computePercent(values.mortgageAmount, values.amount);
export const computeAgencyAmount = (values: ImmoStore) =>
	computeAmount(values.amount, values.agencyFeesPercent);
export const computeAgencyPercent = (values: ImmoStore) =>
	computePercent(values.agencyFees, values.amount);
// ==========
export const computedepositeAmountOnMortageAmount = (values: ImmoStore) =>
	values.amount - values.mortgageAmount;
export const computeMortgageAmount = (values: ImmoStore) => values.amount - values.depositeAmount;

export const computateMortageTotalRateAmount = (values: ImmoStore) =>
	Math.round(values.mortgageMonthlyRateAmount * values.mortgageDurationYears * 12) -
	values.mortgageAmount;

// https://www.hellopret.fr/taux-immobilier/calcul-interet-emprunt/#:~:text=Mettons%20que%20vous%20empruntez%20200,x%2020%20%3D%20100%20000%20%E2%82%AC.&text=Soit%20(200%20000%20x%202.5,12%20%3D%20416.7%20%E2%82%AC%20par%20mois.
const computeMortgageMontlyRatePercent = ({
	mortgageRatePercent
}: {
	mortgageRatePercent: number;
}) => Math.pow(1 + mortgageRatePercent / 100, 1 / 12) - 1;

export const computeMortgageMontlyRatePercentFixed = ({
	mortgageRatePercent
}: {
	mortgageRatePercent: number;
}) => {
	const montlyRate = computeMortgageMontlyRatePercent({ mortgageRatePercent });
	return parseFloat(montlyRate.toFixed(6));
};

interface ComputeMortgageMontlyRateAmountArgs {
	mortgageAmount: number;
	mortgageRatePercent: number;
	mortgageDurationYears: number;
}
export const computeMortgageMontlyRateAmount = ({
	mortgageAmount,
	mortgageRatePercent,
	mortgageDurationYears
}: ComputeMortgageMontlyRateAmountArgs) => {
	const mortgageMonthlyRatePercent = computeMortgageMontlyRatePercentFixed({ mortgageRatePercent });
	const mortageDurationMonths = mortgageDurationYears * 12;
	const montlyAmount =
		(mortgageAmount *
			mortgageMonthlyRatePercent *
			Math.pow(1 + mortgageMonthlyRatePercent, mortageDurationMonths)) /
		(Math.pow(1 + mortgageMonthlyRatePercent, mortageDurationMonths) - 1);
	return parseFloat(montlyAmount.toFixed(2));
};

export const computeTotal = (values: ImmoStore) => {
	values.total =
		values.depositeAmount +
		values.mortgageAmount +
		values.notaryFees +
		values.agencyFees +
		values.mortageTotalRateAmount +
		values.mortageInsuranceFees;

	return values;
};
