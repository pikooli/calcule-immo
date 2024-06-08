import jsPDF from 'jspdf';
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';
import type { ImmoStore } from '$lib/stores/immo';
import { gridTextCenter, gridText } from '$lib/pdf/jsPdf/utils';
import { formatCurrency } from '$lib/utils/display';

interface GenerateSummaryArgs {
	doc: jsPDF;
	immoStore: ImmoStore;
	yPosition: number;
}

export const generateSummary = ({ doc, immoStore, yPosition }: GenerateSummaryArgs) => {
	let currentYPosition = yPosition;
	const i18n = get(t);
	currentYPosition = gridTextCenter({
		doc,
		texts: [
			i18n('pages.immo.amortizationSchedule.total.mortgageAmount'),
			i18n('pages.immo.report.mortgageRatePercent'),
			i18n('pages.immo.amortizationSchedule.total.mortgageInstalment'),
			i18n('pages.immo.report.mortgageInsuranceFees')
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridText({
		doc,
		texts: [
			formatCurrency(immoStore.mortgageAmount),
			`${immoStore.mortgageRatePercent} %`,
			`${immoStore.mortgageDurationYears * 12}`,
			formatCurrency(immoStore.mortgageInsuranceFees)
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridTextCenter({
		doc,
		texts: [
			i18n('pages.immo.report.mortgageMonthlyRateAmount'),
			i18n('pages.immo.report.mortgageMonthlyRateAmountWithInsurance')
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridText({
		doc,
		texts: [
			formatCurrency(immoStore.mortgageMonthlyRateAmount),
			formatCurrency(immoStore.mortgageMonthlyRateAmountWithInsurance)
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridTextCenter({
		doc,
		texts: [
			i18n('pages.immo.report.mortgageInsuranceFeesTotal'),
			i18n('pages.immo.report.mortgageTotalRateAmount'),
			i18n('pages.immo.report.mortgageTotalCost')
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridText({
		doc,
		texts: [
			formatCurrency(immoStore.mortgageInsuranceFeesTotal),
			formatCurrency(immoStore.mortgageTotalRateAmount),
			formatCurrency(immoStore.totalMortgageCost)
		],
		yPosition: currentYPosition,
		drawBorders: true
	});

	return currentYPosition;
};
