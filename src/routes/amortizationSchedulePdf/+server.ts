import { generateAmortizationScheduleBuffer } from '$lib/services/pdf';

export async function POST({ request }) {
	const { immoStore, amortizationScheduleStore } = await request.json();

	const pdfData = await generateAmortizationScheduleBuffer({
		immoStore,
		amortizationScheduleStore
	});

	return new Response(pdfData, {
		headers: {
			'Content-Type': 'application/pdf',
			'Content-Disposition': 'inline; filename="amortizationSchedule.pdf"'
		}
	});
}
