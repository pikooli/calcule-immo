<script>
	import '../app.css';
	import { NavBar } from '$components/navBar';
	import { modalStore } from '$lib/stores/modals';
	import { Modal } from '$components/modals';
</script>

<NavBar />
<div class="flex justify-center">
	<slot />
	<Modal open={$modalStore.isOpen} haveCloseBtn />
</div>
