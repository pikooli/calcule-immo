import jsPDF from 'jspdf';
import { LINE_HEIGHT, MARGIN, PAGE_HEIGHT, USABLE_WIDTH } from '$lib/services/pdf/jsPdf/constants';
import type { DefaultPdfType } from '$lib/services/pdf/jsPdf/utils/types';

interface IncrementLineArgs extends DefaultPdfType {
	doc: jsPDF;
	nb?: number;
}

export const incrementLine = ({ doc, yPosition, nb = 1 }: IncrementLineArgs) => {
	if (yPosition + LINE_HEIGHT > PAGE_HEIGHT) {
		doc.addPage();
		return LINE_HEIGHT;
	}
	return yPosition + LINE_HEIGHT * nb;
};
interface DrawLineArgs extends DefaultPdfType {
	doc: jsPDF;
}

export const drawLine = ({ doc, yPosition }: DrawLineArgs) => {
	doc.setLineWidth(0.1);
	doc.setDrawColor(0);
	doc.line(MARGIN, yPosition, USABLE_WIDTH + MARGIN, yPosition);
	return incrementLine({ doc, yPosition });
};
