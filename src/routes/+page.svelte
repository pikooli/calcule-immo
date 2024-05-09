<script>
	import Input from '$components/inputs/Input.svelte';
	import { inputValue } from '$lib/stores/value.js';
</script>

<form>
	<Input />
	<p>{$inputValue}</p>
</form>
