<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { modalStore } from '$lib/stores/modals';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { immoStore } from '$lib/stores/immo';
	import { IconBtn } from '$components/buttons';
	import amortizationScheduleIcon from '$lib/assets/icons/amortizationScheduleIcon.png';
	import downloadIcon from '$lib/assets/icons/download.png';
	import emailIcon from '$lib/assets/icons/email.png';
	import { generateAmortizationSchedule } from '$lib/pdf';
</script>

<div class="absolute right-4 top-4 flex content-center justify-end">
	<IconBtn
		toolTip={$_('pages.immo.toolTip.amortizationSchedule')}
		iconId="amortizationScheduleIcon"
		handleClick={modalStore.openAmortizationScheduleModal}
		src={amortizationScheduleIcon}
		className="h-[2rem] rounded-md mx-1"
	/>
	<IconBtn
		toolTip={$_('pages.immo.toolTip.email')}
		iconId="emailIcon"
		handleClick={modalStore.openEmailModal}
		src={emailIcon}
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
