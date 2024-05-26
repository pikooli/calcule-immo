import jsPDF from 'jspdf';
import type { ImmoStore } from '$lib/stores/immo';
import { get } from 'svelte/store';
import type { _ } from 'svelte-i18n';
import { gridTextCenter, gridText } from '$lib/pdf/jsPdf/utils';
import { formatCurrency } from '$lib/utils/display';

interface GenerateSummaryArgs {
	doc: jsPDF;
	immoForm: ImmoStore;
	yPosition: number;
	_: typeof _;
}

export const generateSummary = ({ doc, immoForm, yPosition, _ }: GenerateSummaryArgs) => {
	let currentYPosition = yPosition;
	const i18n = get(_);
	currentYPosition = gridTextCenter({
		doc,
		texts: [
			i18n('pages.immo.amortizationSchedule.total.mortgageAmount'),
			i18n('pages.immo.report.mortgageRatePercent'),
			i18n('pages.immo.amortizationSchedule.total.mortgageInstalment'),
			i18n('pages.immo.report.mortgageMonthlyRateAmount')
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridText({
		doc,
		texts: [
			formatCurrency(immoForm.mortgageAmount),
			`${immoForm.mortgageRatePercent} %`,
			`${immoForm.mortgageDurationYears * 12}`,
			formatCurrency(immoForm.mortgageMonthlyRateAmount)
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridTextCenter({
		doc,
		texts: [i18n('pages.immo.report.mortgageInsuranceFees')],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridText({
		doc,
		texts: [formatCurrency(immoForm.mortgageInsuranceFees)],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridTextCenter({
		doc,
		texts: [
			i18n('pages.immo.report.mortgageInsuranceFees'),
			i18n('pages.immo.report.mortgageTotalRateAmount'),
			i18n('pages.immo.report.mortgageTotalCost')
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridText({
		doc,
		texts: [
			formatCurrency(immoForm.mortgageInsuranceFeesTotal),
			formatCurrency(immoForm.mortgageTotalRateAmount),
			formatCurrency(immoForm.totalMortgageCost)
		],
		yPosition: currentYPosition,
		drawBorders: true
	});

	return currentYPosition;
};
