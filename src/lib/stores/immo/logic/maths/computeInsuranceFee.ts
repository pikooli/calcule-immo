import type { ImmoStore } from '$lib/stores/immo';

export const computeMonthyInsuranceFeeByPercent = (values: ImmoStore) => {
	const percentMonthy = values.mortgageInsurancePercent / 12;
	return parseFloat(((values.mortgageAmount * percentMonthy) / 100).toFixed(2));
};

export const computeInsuranceFeePercentByAmount = (values: ImmoStore) => {
	return parseFloat(((values.mortgageInsuranceFees * 100 * 12) / values.mortgageAmount).toFixed(2));
};

export const computeInsuranceFeeTotal = (values: ImmoStore) => {
	const monthlyInsuranceRate = values.mortgageInsurancePercent / 12 / 100;
	const monthlyInterestRate = values.mortgageRatePercent / 12 / 100;
	const loanTermMonths = values.mortgageDurationYears * 12;

	let totalInsurance = 0;
	let remainingBalance = values.mortgageAmount;

	for (let month = 0; month < loanTermMonths; month++) {
		const monthlyInsurance = remainingBalance * monthlyInsuranceRate;
		totalInsurance += monthlyInsurance;

		const monthlyInterest = remainingBalance * monthlyInterestRate;

		const principalRepayment = values.mortgageMonthlyRateAmount - monthlyInterest;

		remainingBalance -= principalRepayment;

		// Debugging information
		console.log(`Month ${month + 1}:`);
		console.log(`Remaining Balance: ${remainingBalance}`);
		console.log(`Monthly Insurance: ${monthlyInsurance}`);
		console.log(`Monthly Interest: ${monthlyInterest}`);
		console.log(`Principal Repayment: ${principalRepayment}`);
		console.log(`Total Insurance: ${totalInsurance}`);
	}

	return totalInsurance.toFixed(2);
};
