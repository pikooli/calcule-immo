<script lang="ts">
	import { onMount } from 'svelte';
	import { immoStore } from '$lib/stores/immo';
	import { modalStore } from '$lib/stores/modals';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';
	import { ImmoForm } from '$components/forms';
	import { AmortizationSchedule } from '$components/displays';
	import { Modal } from '$components/modals';
	import { _ } from 'svelte-i18n';
	import { IconBtn } from '$components/buttons';
	import { DisplayH1 } from '$components/displays';
	import amortizationScheduleIcon from '$lib/assets/images/amortizationScheduleIcon.png';
	import downloadIcon from '$lib/assets/images/download.png';
	import { Card } from '$components/displays';

	onMount(() => {
		immoStore.init();
		amortizationScheduleStore.init($immoStore);
	});
</script>

<div class="relative rounded-md bg-blue-300 p-4">
	<Card className="bg-none">
		<DisplayH1 className="">Compute</DisplayH1>
		<div class="absolute right-4 top-4 flex content-center justify-end">
			<IconBtn
				handleClick={modalStore.triggerModal}
				src={amortizationScheduleIcon}
				className="w-[2rem] h-[2rem] rounded-md transform transition-transform duration-200 ease-in-out hover:scale-110 mx-1"
			/>
			<IconBtn
				handleClick={(e) => {
					e.preventDefault();
					window.alert('abracadabra');
				}}
				src={downloadIcon}
				className="w-[2rem] h-[2rem] rounded-md transform transition-transform duration-200 ease-in-out hover:scale-110 mx-1"
			/>
		</div>
	</Card>
	<ImmoForm />
</div>

<Modal open={$modalStore}>
	<AmortizationSchedule />
</Modal>
