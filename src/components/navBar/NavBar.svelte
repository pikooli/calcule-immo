<script>
	import MobileMenu from './MobileMenu.svelte';
	import NavDropDown from './NavDropDown.svelte';
	import DesktopMenu from './DesktopMenu.svelte';
	import MobileMenuBtn from './MobileMenuBtn.svelte';
	import { default as DesktopLogo } from '$components/navBar/DesktopLogo.svelte';
	import { default as MobileLogo } from '$components/navBar/MobileLogo.svelte';
</script>

<nav class="max-h-[64px] bg-primary">
	<div class="px-2 sm:px-6 md:h-8 lg:px-8">
		<div class="relative flex items-center justify-between">
			<!-- <MobileMenuBtn /> -->
			<DesktopLogo />
			<MobileLogo />
			<!-- <DesktopMenu /> -->
			<!-- <NavDropDown /> -->
		</div>
	</div>
	<!-- <MobileMenu /> -->
</nav>
