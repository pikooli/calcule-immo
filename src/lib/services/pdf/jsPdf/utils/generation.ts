import jsPDF from 'jspdf';

export const generatePdfUrl = (doc: jsPDF) => {
	const pdfBlob = doc.output('blob');
	return URL.createObjectURL(pdfBlob);
};
