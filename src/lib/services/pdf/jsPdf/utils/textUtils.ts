import jsPDF from 'jspdf';
import {
	LINE_HEIGHT,
	MARGIN,
	USABLE_WIDTH,
	DEFAULT_MARGIN_LEFT_TEXT,
	CASE_COLOR
} from '$lib/services/pdf/jsPdf/constants';
import { incrementLine } from '$lib/services/pdf/jsPdf/utils';
import type { DefaultPdfType } from '$lib/services/pdf/jsPdf/utils/types';
interface CenterTextArg extends DefaultPdfType {
	doc: jsPDF;
	text: string;
}

export const centerText = ({ doc, text, yPosition = LINE_HEIGHT }: CenterTextArg) => {
	const textWidth = doc.getTextWidth(text);
	const xPosition = MARGIN + (USABLE_WIDTH - textWidth) / 2;

	doc.text(text, xPosition, yPosition);
	return incrementLine({ doc, yPosition });
};

interface GridTextArg extends DefaultPdfType {
	doc: jsPDF;
	texts: string[];
	drawBorders?: boolean;
	gap?: number;
}

export const gridText = ({
	doc,
	texts,
	yPosition = LINE_HEIGHT,
	drawBorders = false,
	gap = DEFAULT_MARGIN_LEFT_TEXT
}: GridTextArg) => {
	const caseWidth = USABLE_WIDTH / texts.length;
	texts.forEach((text, index) => {
		const textWidth = doc.getTextWidth(text);
		const xPosition = MARGIN + caseWidth * index + caseWidth - textWidth - gap;
		if (drawBorders) {
			doc.setFillColor(CASE_COLOR);
			doc.rect(
				MARGIN + caseWidth * index,
				yPosition - LINE_HEIGHT + 2,
				caseWidth,
				LINE_HEIGHT,
				'DF'
			);
		}
		doc.text(text, xPosition, yPosition);
	});
	return incrementLine({ doc, yPosition });
};

export const gridTextCenter = ({
	doc,
	texts,
	yPosition = LINE_HEIGHT,
	drawBorders = false
}: GridTextArg) => {
	const caseWidth = USABLE_WIDTH / texts.length;
	texts.forEach((text, index) => {
		const textWidth = doc.getTextWidth(text);
		const xPosition = MARGIN + caseWidth * index + (caseWidth - textWidth) / 2;
		if (drawBorders) {
			doc.setFillColor(CASE_COLOR);
			doc.rect(
				MARGIN + caseWidth * index,
				yPosition - LINE_HEIGHT + 2,
				caseWidth,
				LINE_HEIGHT,
				'DF'
			);
		}
		doc.text(text, xPosition, yPosition);
	});
	return incrementLine({ doc, yPosition });
};
