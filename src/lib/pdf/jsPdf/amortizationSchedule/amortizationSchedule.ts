import { jsPDF } from 'jspdf';
import { get } from 'svelte/store';
import { t } from 'svelte-i18n';
import type { AmortizationScheduleStore } from '$lib/stores/amortizationSchedule';
import type { ImmoStore } from '$lib/stores/immo';
import { FONT_SIZE, LINE_HEIGHT, PAGE_HEIGHT, PAGE_WIDTH } from '$lib/pdf/jsPdf/constants';
import { centerText, generatePdfUrl } from '$lib/pdf/jsPdf/utils';
import { generateYearSchedule } from '$lib/pdf/jsPdf/amortizationSchedule/yearSchedule';
import { generateSummary } from '$lib/pdf/jsPdf/amortizationSchedule/summery';

interface GeneratePdf {
	immoStore: ImmoStore;
	amortizationScheduleStore: AmortizationScheduleStore;
}

export const generateAmortizationSchedule = ({
	immoStore,
	amortizationScheduleStore
}: GeneratePdf) => {
	const i18n = get(t);
	const doc = new jsPDF({
		orientation: 'portrait',
		unit: 'mm',
		format: [PAGE_WIDTH, PAGE_HEIGHT]
	});

	let yPosition = LINE_HEIGHT;

	doc.setFont('helvetica', 'normal'); // Default font
	doc.setFontSize(FONT_SIZE);

	const text = i18n('pages.immo.amortizationSchedule.title');
	yPosition = centerText({ doc, text, yPosition });
	yPosition = generateSummary({ doc, immoStore, yPosition });
	generateYearSchedule({
		doc,
		yPosition,
		amortizationScheduleStore
	});

	return doc;
};

export const generateAmortizationScheduleUrl = ({
	immoStore,
	amortizationScheduleStore
}: GeneratePdf) => {
	try {
		const doc = generateAmortizationSchedule({ immoStore, amortizationScheduleStore });
		return generatePdfUrl(doc);
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const generateAmortizationScheduleSave = ({
	immoStore,
	amortizationScheduleStore
}: GeneratePdf) => {
	try {
		const doc = generateAmortizationSchedule({ immoStore, amortizationScheduleStore });
		doc.save('amortizationSchedule.pdf');
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const generateAmortizationScheduleBuffer = ({
	immoStore,
	amortizationScheduleStore
}: GeneratePdf) => {
	try {
		const doc = generateAmortizationSchedule({ immoStore, amortizationScheduleStore });
		return Buffer.from(doc.output('arraybuffer'));
	} catch (e) {
		console.log(e);
		throw e;
	}
};
