<script>
	import '../app.css';
	import { NavBar } from '$components/navBar';
	import { modalStore } from '$lib/stores/modals';
	import { Modal } from '$components/modals';
	import { Footer } from '$components/footer';
</script>

<NavBar />
<div class="my-3 flex justify-center">
	<slot />
	<Modal open={$modalStore.isOpen} haveCloseBtn />
</div>

<Footer />
