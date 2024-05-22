<script lang="ts">
	export let txt: string = '';
	export let className: string = '';
</script>

<button
	class={`rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 ${className}`}
	type="submit">{txt}</button
>
