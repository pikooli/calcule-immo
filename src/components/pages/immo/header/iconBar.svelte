<script lang="ts">
	import { t } from 'svelte-i18n';
	import { modalStore } from '$lib/stores/modals';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { immoStore } from '$lib/stores/immo';
	import { IconBtn } from '$components/buttons';
	import { amortizationScheduleIconAvif, downloadIconAvif, emailIconAvif } from '$lib/assets/icons';
	import { generateAmortizationScheduleUrl } from '$lib/services/pdf';

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

<div class="flex content-center justify-end">
	<IconBtn
		toolTip={$t('pages.immo.toolTip.amortizationSchedule')}
		iconId="amortizationScheduleIcon"
		handleClick={modalStore.openAmortizationScheduleModal}
		src={amortizationScheduleIconAvif}
		className="h-[2rem] rounded-md mx-1"
		alt="amortizationScheduleIcon"
	/>
	<IconBtn
		toolTip={$t('pages.immo.toolTip.email')}
		iconId="emailIcon"
		handleClick={modalStore.openEmailModal}
		src={emailIconAvif}
		className="h-[2rem] rounded-md mx-1"
		alt="emailIcon"
	/>
	<IconBtn
		toolTip={$t('pages.immo.toolTip.download')}
		iconId="downloadIcon"
		handleClick={handleDownload}
		src={downloadIconAvif}
		className="h-[2rem] rounded-md mx-1"
		alt="downloadIcon"
	/>
</div>
