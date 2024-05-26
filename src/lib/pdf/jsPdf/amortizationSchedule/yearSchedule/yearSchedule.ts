import jsPDF from 'jspdf';
import { get } from 'svelte/store';
import type { _ } from 'svelte-i18n';
import type { AmortizationScheduleStore } from '$lib/stores/amortizationSchedule';
import { centerText } from '$lib/pdf/jsPdf/utils';
import { generateYearTotal } from '$lib/pdf/jsPdf/amortizationSchedule/yearSchedule/yearTotal';
import { generateMonthSchedule } from '$lib/pdf/jsPdf/amortizationSchedule/yearSchedule/montSchedule';

interface GenerateYearScheduleArgs {
	doc: jsPDF;
	yPosition: number;
	amortizationSchedule: AmortizationScheduleStore;
	_: typeof _;
}

export const generateYearSchedule = ({
	doc,
	yPosition,
	amortizationSchedule,
	_
}: GenerateYearScheduleArgs) => {
	const i18n = get(_);
	let currentYPosition = yPosition;

	amortizationSchedule.forEach((yearSchedule, idx) => {
		const shouldrawLine = amortizationSchedule.length - 1 !== idx;
		const { year } = yearSchedule;
		const text = `${i18n('pages.immo.amortizationSchedule.yearSchedule.year')} ${year + 1}`;
		currentYPosition = centerText({ doc, text, yPosition: currentYPosition });
		currentYPosition = generateMonthSchedule({ doc, yearSchedule, yPosition: currentYPosition, _ });
		currentYPosition = generateYearTotal({
			doc,
			yPosition: currentYPosition,
			yearSchedule,
			_,
			shouldrawLine
		});
	});
	return currentYPosition;
};
