import type { ImmoStore } from '$lib/stores/immo/';

export const generateSchedule = ({
	mortgageAmount,
	mortgageDurationYears,
	mortgageRatePercent,
	mortageInsuranceFees = 0
}: ImmoStore) => {
	const schedule = [];
	let remainingMortgage = mortgageAmount;
	const monthlyRate = mortgageRatePercent / 100 / 12;
	const totalPayments = mortgageDurationYears * 12;
	const baseMonthlyPayment =
		(mortgageAmount * (monthlyRate * Math.pow(1 + monthlyRate, totalPayments))) /
		(Math.pow(1 + monthlyRate, totalPayments) - 1);
	const monthlyPayment = baseMonthlyPayment + mortageInsuranceFees; // Including insurance fee

	for (let year = 0; year < mortgageDurationYears; year++) {
		let yearInterest = 0;
		let yearPayment = 0;
		const monthSchedule = [];

		for (let month = 0; month < 12; month++) {
			const monthInterest = remainingMortgage * monthlyRate;
			const monthMortgagePayement = baseMonthlyPayment - monthInterest;

			remainingMortgage -= monthMortgagePayement;
			yearInterest += monthInterest;
			yearPayment += monthlyPayment;

			monthSchedule.push({
				month,
				monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
				monthlyInterest: parseFloat(monthInterest.toFixed(2)),
				monthMortgagePayement: parseFloat(monthMortgagePayement.toFixed(2)),
				remainingCapital: remainingMortgage > 0 ? parseFloat(remainingMortgage.toFixed(2)) : 0,
				mortageInsuranceFees
			});
		}

		schedule.push({
			year,
			monthSchedule,
			yearInterest: parseFloat(yearInterest.toFixed(2)),
			yearPayment: parseFloat(yearPayment.toFixed(2)),
			remainingCapital: remainingMortgage > 0 ? parseFloat(remainingMortgage.toFixed(2)) : 0,
			mortageInsuranceFees: mortageInsuranceFees * 12
		});
	}

	return schedule;
};
