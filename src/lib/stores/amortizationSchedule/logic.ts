import type { ImmoStore } from '$lib/stores/immo/';

export const generateSchedule = ({
	mortgageAmount,
	mortgageDurationYears,
	mortgageRatePercent
}: ImmoStore) => {
	const schedule = [];
	let remainingMortgage = mortgageAmount;
	const monthlyRate = mortgageRatePercent / 100 / 12;
	const totalPayments = mortgageDurationYears * 12;
	const monthlyPayment =
		(mortgageAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
		(Math.pow(1 + monthlyRate, totalPayments) - 1);

	for (let year = 0; year < mortgageDurationYears; year++) {
		let yearInterest = 0;
		let yearPayment = 0;
		const monthSchedule = [];

		for (let month = 0; month < 12; month++) {
			const monthInterest = remainingMortgage * monthlyRate;
			const monthCapital = monthlyPayment - monthInterest;

			remainingMortgage -= monthCapital;
			yearInterest += monthInterest;
			yearPayment += monthlyPayment;

			monthSchedule.push({
				month,
				monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
				monthlyInterest: parseFloat(monthInterest.toFixed(2)),
				monthlyCapital: parseFloat(monthCapital.toFixed(2)),
				remainingCapital: remainingMortgage > 0 ? parseFloat(remainingMortgage.toFixed(2)) : 0
			});
		}

		schedule.push({
			year,
			monthSchedule,
			yearInterest: parseFloat(yearInterest.toFixed(2)),
			yearPayment: parseFloat(yearPayment.toFixed(2)),
			remainingCapital: remainingMortgage > 0 ? parseFloat(remainingMortgage.toFixed(2)) : 0
		});
	}

	return schedule;
};
