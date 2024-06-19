<script lang="ts">
	import { t, locale } from 'svelte-i18n';
	import { InputEmail, InputCheckBox, InputText } from '$components/inputs';
	import { SubmitBtn } from '$components/buttons';
	import { DisplayH1, DisplayText } from '$components/displays';
	import { immoStore } from '$lib/stores/immo';
	import { loaderGlobalStore } from '$lib/stores/loaderGlobal';
	import { amortizationScheduleStore } from '$lib/stores/amortizationSchedule';

	let termsAndConditions = false;
	let email = '';

	const submitHandle = () => {
		loaderGlobalStore.triggerLoading();
	};
</script>

<form
	action="?/emailAmortizationSchedule"
	on:submit={submitHandle}
	method="post"
	class="grap-4 grid grid-cols-1 p-8"
>
	<DisplayH1 text={$t('pages.immo.email.title')} />
	<DisplayText text={$t('pages.immo.email.description')} />
	<InputEmail label={$t('email')} name="email" value={email} required />
	<InputCheckBox
		label={$t('form.termsAndConditions')}
		name="termsAndConditions"
		bind:value={termsAndConditions}
		required
	/>
	<InputText inputClass="hidden" name="immoStore" value={JSON.stringify($immoStore)} />
	<InputText
		inputClass="hidden"
		name="amortizationScheduleStore"
		value={JSON.stringify($amortizationScheduleStore)}
	/>
	<InputText inputClass="hidden" name="locale" value={$locale} />

	<SubmitBtn
		txt={$t('form.submit')}
		id="btn-emailAmortizationSchedule"
		className="w-fit mt-4 ml-auto"
	/>
</form>
