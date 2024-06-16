import jsPDF from 'jspdf';
import fs from 'fs';
import {
	LINE_HEIGHT,
	LOGO_HEIGHT,
	LOGO_WIDTH,
	LOGO_MARGIN
} from '$lib/services/pdf/jsPdf/constants';
import { incrementLine } from '$lib/services/pdf/jsPdf/utils';
import type { DefaultPdfType } from '$lib/services/pdf/jsPdf/utils/types';
import { get } from 'svelte/store';
import { t } from 'svelte-i18n';

interface AddLogoArg extends DefaultPdfType {
	doc: jsPDF;
	src: string;
	yPosition: number;
}

export const addLogo = async ({ doc, src, yPosition = LINE_HEIGHT }: AddLogoArg) => {
	const i18n = get(t);
	const website = i18n('website.title');

	const base64Image = await getBase64Image(src);
	doc.addImage(
		`data:image/png;base64,${base64Image}`,
		'PNG',
		LOGO_MARGIN,
		yPosition,
		LOGO_WIDTH,
		LOGO_HEIGHT
	);
	doc.text(website, LOGO_MARGIN + LOGO_WIDTH, yPosition + LOGO_HEIGHT / 2);
	yPosition = incrementLine({ doc, yPosition });
	return incrementLine({ doc, yPosition });
};

function getBase64Image(filePath: string) {
	const bitmap = fs.readFileSync(filePath);
	return Buffer.from(bitmap).toString('base64');
}
