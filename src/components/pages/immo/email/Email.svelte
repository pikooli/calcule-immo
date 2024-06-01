<script lang="ts">
	import { _ } from 'svelte-i18n';
	import { InputEmail, InputCheckBox } from '$components/inputs';
	import { SubmitBtn } from '$components/buttons';
	import { DisplayH1, DisplayText } from '$components/displays';

	let termsAndConditions = false;
	let email = '';
</script>

<form action="?/sendEmail" method="post" class="grap-4 bg-primary grid grid-cols-1 rounded-md p-8">
	<DisplayH1 text={$_('pages.immo.email.title')} />
	<DisplayText text={$_('pages.immo.email.description')} />
	<InputEmail label={$_('email')} name="email" value={email} required />
	<InputCheckBox
		label={$_('form.termsAndConditions')}
		name="termsAndConditions"
		bind:value={termsAndConditions}
		required
	/>

	<SubmitBtn txt="send" className="w-fit mt-4 " />
</form>
