<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { modalStore } from '$lib/stores/modals';
	import { ImmoForm } from '$components/forms';
	import { IconBtn } from '$components/buttons';
	import { DisplayH1 } from '$components/displays';
	import amortizationScheduleIcon from '$lib/assets/images/amortizationScheduleIcon.png';
	import downloadIcon from '$lib/assets/images/download.png';
	import { Card } from '$components/displays';
</script>

<div class="relative rounded-md bg-blue-300 p-4">
	<Card className="bg-none">
		<DisplayH1 className="" text="Compute" />
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
					window.alert('abracadabra');
				}}
				src={downloadIcon}
				className="h-[2rem] rounded-md mx-1"
			/>
		</div>
	</Card>
	<ImmoForm />
</div>
