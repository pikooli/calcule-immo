<script lang="ts">
	import { t } from 'svelte-i18n';
	import { modalStore } from '$lib/stores/modals';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { immoStore } from '$lib/stores/immo';
	import { IconBtn } from '$components/buttons';
	import { amortizationScheduleIcon, downloadIcon, emailIcon } from '$lib/assets/icons';
	import { generateAmortizationScheduleUrl } from '$lib/pdf';

	const handleDownload = (e: MouseEvent) => {
		e.preventDefault();
		amortizationScheduleStore.init($immoStore);
		window.open(
			generateAmortizationScheduleUrl({
				immoStore: $immoStore,
				amortizationScheduleStore: $amortizationScheduleStore
			})
		);
	};
</script>

<div class="absolute right-4 top-4 flex content-center justify-end">
	<IconBtn
		toolTip={$t('pages.immo.toolTip.amortizationSchedule')}
		iconId="amortizationScheduleIcon"
		handleClick={modalStore.openAmortizationScheduleModal}
		src={amortizationScheduleIcon}
		className="h-[2rem] rounded-md mx-1"
	/>
	<IconBtn
		toolTip={$t('pages.immo.toolTip.email')}
		iconId="emailIcon"
		handleClick={modalStore.openEmailModal}
		src={emailIcon}
		className="h-[2rem] rounded-md mx-1"
	/>
	<IconBtn
		toolTip={$t('pages.immo.toolTip.download')}
		iconId="downloadIcon"
		handleClick={handleDownload}
		src={downloadIcon}
		className="h-[2rem] rounded-md mx-1"
	/>
</div>
