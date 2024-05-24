<script>
	import MobileMenu from './MobileMenu.svelte';
	import NavDropDown from './NavDropDown.svelte';
	import DesktopMenu from './DesktopMenu.svelte';
	import MobileMenuBtn from './MobileMenuBtn.svelte';
	import logoIcon from '$lib/assets/images/logo.png';
</script>

<nav class="bg-gray-800">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<!-- <MobileMenuBtn /> -->
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<img class="scale-200 h-8 w-auto" src={logoIcon} alt="Your Company" />
				</div>
				<DesktopMenu />
			</div>
			<!-- <NavDropDown /> -->
		</div>
	</div>
	<!-- <MobileMenu /> -->
</nav>
