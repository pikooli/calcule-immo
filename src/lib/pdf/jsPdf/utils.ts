import jsPDF from 'jspdf';
import { LINE_HEIGHT } from './constants';

interface CenterTextArg {
	doc: jsPDF;
	text: string;
	yPosition: number;
}

export const centerText = ({ doc, text, yPosition = LINE_HEIGHT }: CenterTextArg) => {
	const pageWidth = doc.internal.pageSize.getWidth();
	const textWidth = doc.getTextWidth(text);
	const xPosition = (pageWidth - textWidth) / 2;

	doc.text(text.normalize('NFKD'), xPosition, yPosition);
	return incrementLine({ doc, yPosition });
};

interface GridTextArg {
	doc: jsPDF;
	texts: string[];
	grap: number;
	yPosition: number;
}

export const gridText = ({ doc, texts, grap = 0, yPosition = LINE_HEIGHT }: GridTextArg) => {
	const pageWidth = doc.internal.pageSize.getWidth();
	texts.forEach((text, index) => {
		const textWidth = doc.getTextWidth(text);
		let xPosition = ((pageWidth - textWidth) / texts.length) * index;
		if (index > 0) {
			xPosition += grap;
		}
		console.log('text', text);
		doc.text(text.normalize('NFKD'), xPosition, yPosition);
	});
	return incrementLine({ doc, yPosition });
};

export const generatePdfUrl = (doc: jsPDF) => {
	const pdfBlob = doc.output('blob');
	return URL.createObjectURL(pdfBlob);
};

interface IncrementLineArgs {
	doc: jsPDF;
	nb?: number;
	yPosition: number;
}

export const incrementLine = ({ doc, yPosition, nb = 1 }: IncrementLineArgs) => {
	const pageHeight = doc.internal.pageSize.getHeight();

	if (yPosition + LINE_HEIGHT > pageHeight) {
		doc.addPage();
		return LINE_HEIGHT;
	}
	return (yPosition += LINE_HEIGHT * nb);
};
