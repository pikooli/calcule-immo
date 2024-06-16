<script lang="ts">
	import { t } from 'svelte-i18n';
	import { modalStore } from '$lib/stores/modals';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { loaderGlobalStore } from '$lib/stores/loaderGlobal';
	import { immoStore } from '$lib/stores/immo';
	import { IconBtn } from '$components/buttons';
	import { amortizationScheduleIconAvif, downloadIconAvif, emailIconAvif } from '$lib/assets/icons';
	import { fetchApi } from '$lib/services/fetch';

	const handleDownload = (e: MouseEvent) => {
		loaderGlobalStore.triggerAlert(e);
		amortizationScheduleStore.init($immoStore);
		fetchApi('/amortizationSchedulePdf', {
			method: 'POST',
			body: JSON.stringify({
				immoStore: $immoStore,
				amortizationScheduleStore: $amortizationScheduleStore
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then((response) => response.blob())
			.then((blob) => {
				loaderGlobalStore.closeAlert();
				if (blob.size === 0) return;
				const url = window.URL.createObjectURL(blob);
				window.open(url);
			});
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
