import jsPDF from 'jspdf';
import { get } from 'svelte/store';
import type { _ } from 'svelte-i18n';
import type { YearSchedule } from '$lib/stores/amortizationSchedule';
import { gridText, gridTextCenter } from '$lib/pdf/jsPdf/utils';
import { formatCurrency } from '$lib/utils/display';

interface GenerateMonthScheduleArgs {
	doc: jsPDF;
	yPosition: number;
	yearSchedule: YearSchedule;
	_: typeof _;
}

export const generateMonthSchedule = ({
	doc,
	yPosition,
	yearSchedule,
	_
}: GenerateMonthScheduleArgs) => {
	const i18n = get(_);
	let currentYPosition = yPosition;

	const { monthSchedule } = yearSchedule;
	currentYPosition = gridTextCenter({
		doc,
		texts: [
			i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.month'),
			i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthlyPayment'),
			i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthMortgagePayment'),
			i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthlyInterest'),
			i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.mortgageInsuranceFees'),
			i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.remainingCapital')
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	monthSchedule.forEach((month) => {
		currentYPosition = gridText({
			doc,
			texts: [
				`${month.month + 1}`,
				formatCurrency(month.monthlyPayment),
				formatCurrency(month.monthlyInterest),
				formatCurrency(month.monthMortgagePayment),
				formatCurrency(month.mortgageInsuranceFees),
				formatCurrency(month.remainingCapital)
			],
			drawBorders: true,
			yPosition: currentYPosition
		});
	});

	return currentYPosition;
};
