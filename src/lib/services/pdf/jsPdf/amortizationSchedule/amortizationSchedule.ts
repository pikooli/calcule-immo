import { jsPDF } from 'jspdf';
import { get } from 'svelte/store';
import { t } from 'svelte-i18n';
import type { AmortizationScheduleStore } from '$lib/stores/amortizationSchedule';
import type { ImmoStore } from '$lib/stores/immo';
import { FONT_SIZE, LINE_HEIGHT, PAGE_HEIGHT, PAGE_WIDTH } from '$lib/services/pdf/jsPdf/constants';
import { centerText, generatePdfUrl, addLogo } from '$lib/services/pdf/jsPdf/utils';
import { generateYearSchedule } from '$lib/services/pdf/jsPdf/amortizationSchedule/yearSchedule';
import { generateSummary } from '$lib/services/pdf/jsPdf/amortizationSchedule/summery';
import { PUBLIC_LOCAL, PUBLIC_DEV_URL, PUBLIC_PROD_URL } from '$env/static/public';
const LOGO = '/assets/icons/logo.png';

interface GeneratePdf {
	immoStore: ImmoStore;
	amortizationScheduleStore: AmortizationScheduleStore;
}

export const generateAmortizationSchedule = async ({
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
	const logoUrl = PUBLIC_LOCAL === 'dev' ? PUBLIC_DEV_URL + LOGO : PUBLIC_PROD_URL + LOGO;
	yPosition = await addLogo({ doc, src: logoUrl, yPosition });
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

export const generateAmortizationScheduleUrl = async ({
	immoStore,
	amortizationScheduleStore
}: GeneratePdf) => {
	try {
		const doc = await generateAmortizationSchedule({ immoStore, amortizationScheduleStore });
		return generatePdfUrl(doc);
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const generateAmortizationScheduleSave = async ({
	immoStore,
	amortizationScheduleStore
}: GeneratePdf) => {
	try {
		const doc = await generateAmortizationSchedule({ immoStore, amortizationScheduleStore });
		doc.save('amortizationSchedule.pdf');
	} catch (e) {
		console.log(e);
		throw e;
	}
};

export const generateAmortizationScheduleBuffer = async ({
	immoStore,
	amortizationScheduleStore
}: GeneratePdf) => {
	try {
		const doc = await generateAmortizationSchedule({ immoStore, amortizationScheduleStore });
		return Buffer.from(doc.output('arraybuffer'));
	} catch (e) {
		console.log(e);
		throw e;
	}
};
