<script>
	import '../app.css';
	import { NavBar } from '$components/navBar';
	import { modalStore } from '$lib/stores/modals';
	import { alertStore } from '$lib/stores/alerts';
	import { loaderGlobalStore } from '$lib/stores/loaderGlobal';
	import { Modal, Alert, LoadingGlobal } from '$components/modals';
	import { Footer } from '$components/footer';
</script>

<div class="flex h-screen flex-col">
	<NavBar />
	<slot />
	<Modal open={$modalStore.isOpen} haveCloseBtn />
	<Alert open={$alertStore.isOpen} haveCloseBtn />
	<LoadingGlobal open={$loaderGlobalStore} />
	<Footer />
</div>
