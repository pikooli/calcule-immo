import jsPDF from 'jspdf';
import { get } from 'svelte/store';
import type { _ } from 'svelte-i18n';
import type { AmortizationScheduleStore } from '$lib/stores/amortizationSchedule';
import type { ImmoStore } from '$lib/stores/immo';
import { FONT_SIZE, LINE_HEIGHT } from './constants';
import { centerText, generatePdfUrl, gridText, incrementLine } from './utils';
import { formatCurrency } from '$lib/utils/display';

interface GeneratePdf {
	immoForm: ImmoStore;
	amortizationSchedule: AmortizationScheduleStore;
	_: typeof _;
}

export const generatePDF = ({ immoForm, amortizationSchedule, _ }: GeneratePdf) => {
	const doc = new jsPDF();
	const i18n = get(_);

	let yPosition = LINE_HEIGHT;

	doc.setFont('helvetica', 'normal'); // Default font
	doc.setFontSize(FONT_SIZE);

	let text = i18n('pages.immo.amortizationSchedule.title');
	yPosition = centerText({ doc, text, yPosition });

	amortizationSchedule.forEach((yearSchedule, index) => {
		const { year, monthSchedule } = yearSchedule;
		text = `${i18n('pages.immo.amortizationSchedule.yearSchedule.year')} ${year}`;
		yPosition = centerText({ doc, text, yPosition });
		yPosition = gridText({
			doc,
			texts: [
				i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.month'),
				i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthlyPayment'),
				i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthMortgagePayment'),
				i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.monthlyInterest'),
				i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.mortgageInsuranceFees'),
				i18n('pages.immo.amortizationSchedule.yearSchedule.monthSchedule.remainingCapital')
			],
			grap: 20,
			yPosition
		});
		monthSchedule.forEach((month, index) => {
			yPosition = gridText({
				doc,
				texts: [
					formatCurrency(month.month),
					formatCurrency(month.monthlyPayment),
					formatCurrency(month.monthlyInterest),
					formatCurrency(month.monthMortgagePayment),
					formatCurrency(month.mortgageInsuranceFees),
					formatCurrency(month.remainingCapital)
				],
				grap: 20,
				yPosition
			});
		});
	});
	// doc.save('amortizationSchedule.pdf');
	return generatePdfUrl(doc);
};
