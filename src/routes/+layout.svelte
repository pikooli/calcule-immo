<script>
	import '../app.css';
	import { NavBar } from '$components/navBar';
	import { modalStore } from '$lib/stores/modals';
	import { alertStore } from '$lib/stores/alerts';
	import { Modal, Alert } from '$components/modals';
	import { Footer } from '$components/footer';
</script>

<div class="flex h-screen flex-col">
	<NavBar />
	<slot />
	<Modal open={$modalStore.isOpen} haveCloseBtn />
	<Alert open={$alertStore.isOpen} haveCloseBtn />
	<Footer />
</div>
