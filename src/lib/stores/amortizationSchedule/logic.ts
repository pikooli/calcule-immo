import type { ImmoStore } from '$lib/stores/immo/';
import { computeMortgageMontlyRatePercentFixed } from '$lib/stores/immo/logic/maths/';

export const generateSchedule = ({
	mortgageAmount,
	mortgageDurationYears,
	mortgageRatePercent,
	mortgageInsuranceFees = 0,
	mortgageMonthlyAmount
}: ImmoStore) => {
	const schedule = [];
	let remainingMortgage = mortgageAmount;
	const monthlyMortgageRate = computeMortgageMontlyRatePercentFixed({ mortgageRatePercent });
	const monthlyPayment = mortgageMonthlyAmount + mortgageInsuranceFees;

	for (let year = 0; year < mortgageDurationYears; year++) {
		let yearInterest = 0;
		let yearPayment = 0;
		let yearMortgagePayment = 0;
		const monthSchedule = [];

		for (let month = 0; month < 12; month++) {
			const monthInterest = remainingMortgage * monthlyMortgageRate;
			const monthMortgagePayment = mortgageMonthlyAmount - monthInterest;

			remainingMortgage -= monthMortgagePayment;
			yearInterest += monthInterest;
			yearPayment += monthlyPayment;
			yearMortgagePayment += monthMortgagePayment;

			monthSchedule.push({
				month,
				monthlyPayment: parseFloat(monthlyPayment.toFixed(2)),
				monthlyInterest: parseFloat(monthInterest.toFixed(2)),
				monthMortgagePayment: parseFloat(monthMortgagePayment.toFixed(2)),
				remainingCapital: remainingMortgage > 0 ? parseFloat(remainingMortgage.toFixed(2)) : 0,
				mortgageInsuranceFees
			});
		}

		schedule.push({
			year,
			monthSchedule,
			yearInterest: parseFloat(yearInterest.toFixed(2)),
			yearPayment: parseFloat(yearPayment.toFixed(2)),
			yearMortgagePayment: parseFloat(yearMortgagePayment.toFixed(2)),
			remainingCapital: remainingMortgage > 0 ? parseFloat(remainingMortgage.toFixed(2)) : 0,
			mortgageInsuranceFees: mortgageInsuranceFees * 12
		});
	}

	return schedule;
};
