import jsPDF from 'jspdf';
import { get } from 'svelte/store';
import { t } from 'svelte-i18n';
import type { YearSchedule } from '$lib/stores/amortizationSchedule';
import { gridText, drawLine, gridTextCenter } from '$lib/pdf/jsPdf/utils';
import { formatCurrency } from '$lib/utils/display';

interface GenerateYearScheduleArgs {
	doc: jsPDF;
	yPosition: number;
	yearSchedule: YearSchedule;
	shouldrawLine?: boolean;
}

export const generateYearTotal = ({
	doc,
	yPosition,
	yearSchedule,
	shouldrawLine
}: GenerateYearScheduleArgs) => {
	const i18n = get(t);
	let currentYPosition = yPosition;

	currentYPosition = gridTextCenter({
		doc,
		texts: [
			i18n('pages.immo.amortizationSchedule.yearSchedule.total'),
			i18n('pages.immo.amortizationSchedule.yearSchedule.yearPayment'),
			i18n('pages.immo.amortizationSchedule.yearSchedule.yearMortgagePayment'),
			i18n('pages.immo.amortizationSchedule.yearSchedule.yearInterest'),
			i18n('pages.immo.amortizationSchedule.yearSchedule.mortgageInsuranceFees'),
			i18n('pages.immo.amortizationSchedule.yearSchedule.remainingCapital')
		],
		yPosition: currentYPosition
	});
	currentYPosition = gridText({
		doc,
		texts: [
			'',
			formatCurrency(yearSchedule.yearPayment),
			formatCurrency(yearSchedule.yearMortgagePayment),
			formatCurrency(yearSchedule.yearInterest),
			formatCurrency(yearSchedule.mortgageInsuranceFees),
			formatCurrency(yearSchedule.remainingCapital)
		],
		yPosition: currentYPosition
	});
	if (shouldrawLine) {
		currentYPosition = drawLine({ doc, yPosition: currentYPosition });
	}
	return currentYPosition;
};
