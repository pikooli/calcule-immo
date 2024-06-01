<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { modalStore } from '$lib/stores/modals';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { immoStore } from '$lib/stores/immo';
	import { ImmoForm } from '$components/forms';
	import { IconBtn } from '$components/buttons';
	import { DisplayH1 } from '$components/displays';
	import amortizationScheduleIcon from '$lib/assets/images/amortizationScheduleIcon.png';
	import downloadIcon from '$lib/assets/images/download.png';
	import { Card } from '$components/displays';
	import { generateAmortizationSchedule } from '$lib/pdf';
</script>

<div class="relative h-auto rounded-md bg-blue-300 p-4">
	<Card className="bg-none">
		<DisplayH1 text="Compute" />
		<div class="absolute right-4 top-4 flex content-center justify-end">
			<IconBtn
				toolTip={$_('pages.immo.toolTip.amortizationSchedule')}
				iconId="amortizationScheduleIcon"
				handleClick={modalStore.triggerModal}
				src={amortizationScheduleIcon}
				className="h-[2rem] rounded-md mx-1"
			/>
			<IconBtn
				toolTip={$_('pages.immo.toolTip.download')}
				iconId="downloadIcon"
				handleClick={(e) => {
					e.preventDefault();
					generateAmortizationSchedule({
						immoForm: $immoStore,
						amortizationSchedule: $amortizationScheduleStore,
						_
					});
				}}
				src={downloadIcon}
				className="h-[2rem] rounded-md mx-1"
			/>
		</div>
	</Card>
	<ImmoForm />
</div>
