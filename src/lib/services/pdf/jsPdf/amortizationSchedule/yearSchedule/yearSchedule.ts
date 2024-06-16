import jsPDF from 'jspdf';
import { get } from 'svelte/store';
import { t } from 'svelte-i18n';
import type { AmortizationScheduleStore } from '$lib/stores/amortizationSchedule';
import { centerText } from '$lib/services/pdf/jsPdf/utils';
import { generateYearTotal } from '$lib/services/pdf/jsPdf/amortizationSchedule/yearSchedule/yearTotal';
import { generateMonthSchedule } from '$lib/services/pdf/jsPdf/amortizationSchedule/yearSchedule/montSchedule';

interface GenerateYearScheduleArgs {
	doc: jsPDF;
	yPosition: number;
	amortizationScheduleStore: AmortizationScheduleStore;
}

export const generateYearSchedule = ({
	doc,
	yPosition,
	amortizationScheduleStore
}: GenerateYearScheduleArgs) => {
	const i18n = get(t);
	let currentYPosition = yPosition;

	amortizationScheduleStore.forEach((yearSchedule, idx) => {
		const shouldrawLine = amortizationScheduleStore.length - 1 !== idx;
		const { year } = yearSchedule;
		const text = `${i18n('pages.immo.amortizationSchedule.yearSchedule.year')} ${year + 1}`;
		currentYPosition = centerText({ doc, text, yPosition: currentYPosition });
		currentYPosition = generateMonthSchedule({ doc, yearSchedule, yPosition: currentYPosition });
		currentYPosition = generateYearTotal({
			doc,
			yPosition: currentYPosition,
			yearSchedule,
			shouldrawLine
		});
	});
	return currentYPosition;
};
