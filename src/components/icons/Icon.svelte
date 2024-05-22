<script lang="ts">
	export let handleClick: () => void = () => {};
	export let src: string = '';
	export let alt: string = '';
	export let className: string = '';
</script>

<button on:click={handleClick}>
	<img {src} {alt} class={`h-5 w-5 ${className}`} />
</button>
