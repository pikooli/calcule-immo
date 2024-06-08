import type { ImmoStore } from '$lib/stores/immo';
import { computeAmount, computePercent } from '$lib/utils/math';

export const computeMortgageAmountOnmortgagePercent = (values: ImmoStore) =>
	computeAmount(values.amount, values.mortgageAmountPercent);
export const computeMortgageAmountOnmortgageAmount = (values: ImmoStore) =>
	computePercent(values.mortgageAmount, values.amount);
export const computeMortgageInsuranceFeesTotal = (values: ImmoStore) =>
	values.mortgageInsuranceFees * 12 * values.mortgageDurationYears;
export const computeMortgageAmount = (values: ImmoStore) => values.amount - values.depositeAmount;
export const computeMortgageTotalRateAmount = (values: ImmoStore) => {
	if (values.mortgageMonthlyRateAmount === 0) {
		return 0;
	}
	return (
		Math.round(values.mortgageMonthlyRateAmount * 12 * values.mortgageDurationYears) -
		values.mortgageAmount
	);
};

// https://www.hellopret.fr/taux-immobilier/calcul-interet-emprunt/#:~:text=Mettons%20que%20vous%20empruntez%20200,x%2020%20%3D%20100%20000%20%E2%82%AC.&text=Soit%20(200%20000%20x%202.5,12%20%3D%20416.7%20%E2%82%AC%20par%20mois.
export const computeMortgageMontlyRatePercent = ({
	mortgageRatePercent
}: {
	mortgageRatePercent: number;
}) => {
	if (mortgageRatePercent === 0) {
		return 0;
	}
	return Math.pow(1 + mortgageRatePercent / 100, 1 / 12) - 1;
};

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
	mortgageInsuranceFees?: number;
}

export const computeMortgageMontlyRateAmount = ({
	mortgageAmount,
	mortgageRatePercent,
	mortgageDurationYears,
	mortgageInsuranceFees = 0
}: ComputeMortgageMontlyRateAmountArgs) => {
	if (mortgageRatePercent === 0 || mortgageAmount === 0 || mortgageDurationYears === 0) {
		return 0;
	}
	const mortgageMonthlyRatePercent = computeMortgageMontlyRatePercent({ mortgageRatePercent });
	const totalPaymentInstallments = mortgageDurationYears * 12;
	const montlyAmount =
		(mortgageAmount *
			(mortgageMonthlyRatePercent *
				Math.pow(1 + mortgageMonthlyRatePercent, totalPaymentInstallments))) /
		(Math.pow(1 + mortgageMonthlyRatePercent, totalPaymentInstallments) - 1);

	return parseFloat((montlyAmount + mortgageInsuranceFees).toFixed(2));
};

export const computeMortgageTotalCost = (values: ImmoStore) => {
	values.totalMortgageCost =
		values.mortgageAmount + values.mortgageTotalRateAmount + values.mortgageInsuranceFeesTotal;
	return values;
};
export const computeMortgageMontlyRateWithInsurance = (values: ImmoStore) =>
	values.mortgageMonthlyRateAmount + values.mortgageInsuranceFees;
