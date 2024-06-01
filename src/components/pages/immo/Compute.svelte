<script lang="ts">
	import { _ } from 'svelte-i18n';

	import { ImmoForm } from '$components/forms';
	import { Header } from './header/';
</script>

<div class="bg-primary relative h-auto rounded-md p-4">
	<Header />
	<ImmoForm />
</div>
