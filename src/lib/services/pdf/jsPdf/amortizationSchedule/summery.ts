import jsPDF from 'jspdf';
import { t } from 'svelte-i18n';
import { get } from 'svelte/store';
import type { ImmoStore } from '$lib/stores/immo';
import { gridTextCenter, gridText } from '$lib/services/pdf/jsPdf/utils';
import { formatCurrency } from '$lib/utils/display';
import { PERCENT } from '$lib/constants';

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
			i18n('pdf.amortizationSchedule.mortgageAmount'),
			i18n('pdf.amortizationSchedule.mortgageRatePercent'),
			i18n('pdf.amortizationSchedule.mortgageInstalment'),
			i18n('pdf.amortizationSchedule.mortgageInsuranceFees')
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridText({
		doc,
		texts: [
			formatCurrency(immoStore.mortgageAmount),
			`${immoStore.mortgageRatePercent} ${PERCENT}`,
			`${immoStore.mortgageDurationYears * 12}`,
			formatCurrency(immoStore.mortgageInsuranceFees)
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridTextCenter({
		doc,
		texts: [
			i18n('pdf.amortizationSchedule.mortgageMonthlyAmount'),
			i18n('pdf.amortizationSchedule.mortgageMonthlyAmountWithInsurance')
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridText({
		doc,
		texts: [
			formatCurrency(immoStore.mortgageMonthlyAmount),
			formatCurrency(immoStore.mortgageMonthlyAmountWithInsurance)
		],
		yPosition: currentYPosition,
		drawBorders: true
	});
	currentYPosition = gridTextCenter({
		doc,
		texts: [
			i18n('pdf.amortizationSchedule.mortgageInsuranceFeesTotal'),
			i18n('pdf.amortizationSchedule.mortgageTotalRateAmount'),
			i18n('pdf.amortizationSchedule.mortgageTotalCost')
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
