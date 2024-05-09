<script lang="ts">
	import { inputValue } from '$lib/stores/value.js';

	function onInput(event: EventElements) {
		inputValue.set(event.currentTarget.value);
	}
</script>

<input placeholder="test" on:input={onInput} bind:value={$inputValue} />
