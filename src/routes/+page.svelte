<script lang="ts">
	import { ImmoPage } from '$components/pages';
	import { alertStore } from '$lib/stores/alerts';
	export let form;
	import { onMount } from 'svelte';

	onMount(() => {
		if (form?.error) {
			alertStore.openErrorAlert(form.errorMessage);
		}
		if (form?.success) {
			alertStore.openSuccessAlert(form.successMessage);
		}
	});
</script>

<ImmoPage {form} />
