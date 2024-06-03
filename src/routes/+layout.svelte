<script>
	import '../app.css';
	import { NavBar } from '$components/navBar';
	import { modalStore } from '$lib/stores/modals';
	import { Modal } from '$components/modals';
	import { Footer } from '$components/footer';
</script>

<div class="flex h-screen flex-col">
	<NavBar />
	<slot />
	<Modal open={$modalStore.isOpen} haveCloseBtn />

	<Footer />
</div>
