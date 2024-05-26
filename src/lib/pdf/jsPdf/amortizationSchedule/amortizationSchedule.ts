import jsPDF from 'jspdf';
import { get } from 'svelte/store';
import type { _ } from 'svelte-i18n';
import type { AmortizationScheduleStore } from '$lib/stores/amortizationSchedule';
import type { ImmoStore } from '$lib/stores/immo';
import { FONT_SIZE, LINE_HEIGHT, PAGE_HEIGHT, PAGE_WIDTH } from '$lib/pdf/jsPdf/constants';
import { centerText, generatePdfUrl } from '$lib/pdf/jsPdf/utils';
import { generateYearSchedule } from '$lib/pdf/jsPdf/amortizationSchedule/yearSchedule';
import { generateSummary } from '$lib/pdf/jsPdf/amortizationSchedule/summery';

interface GeneratePdf {
	immoForm: ImmoStore;
	amortizationSchedule: AmortizationScheduleStore;
	_: typeof _;
}

export const generateAmortizationSchedule = ({
	immoForm,
	amortizationSchedule,
	_
}: GeneratePdf) => {
	const doc = new jsPDF({
		orientation: 'portrait',
		unit: 'mm',
		format: [PAGE_WIDTH, PAGE_HEIGHT]
	});
	const i18n = get(_);

	let yPosition = LINE_HEIGHT;

	doc.setFont('helvetica', 'normal'); // Default font
	doc.setFontSize(FONT_SIZE);

	const text = i18n('pages.immo.amortizationSchedule.title');
	yPosition = centerText({ doc, text, yPosition });
	yPosition = generateSummary({ doc, immoForm, yPosition, _ });
	generateYearSchedule({
		doc,
		yPosition,
		amortizationSchedule,
		_
	});

	doc.save('amortizationSchedule.pdf');
	return generatePdfUrl(doc);
};
