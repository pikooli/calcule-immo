<script lang="ts">
	export let id: string = '';
	export let txt: string = '';
	export let className: string = '';
</script>

<button
	class={`rounded bg-primary-500 px-4 py-2 font-bold text-white hover:bg-primary-700 ${className}`}
	type="submit"
	{id}>{txt}</button
>
