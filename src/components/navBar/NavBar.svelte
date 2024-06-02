<script>
	import { t } from 'svelte-i18n';
	import logoIcon from '$lib/assets/icons/logo.png';
	import MobileMenu from './MobileMenu.svelte';
	import NavDropDown from './NavDropDown.svelte';
	import DesktopMenu from './DesktopMenu.svelte';
	import MobileMenuBtn from './MobileMenuBtn.svelte';
	import { DisplayStrong } from '$components/displays';
</script>

<nav class="bg-secondary">
	<div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<!-- <MobileMenuBtn /> -->
			<div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<a href="/" class="flex items-center">
						<img class="scale-200 h-8 w-auto" src={logoIcon} alt="Your Company" />
						<DisplayStrong text={$t('website')} className="text-white pl-2" />
					</a>
				</div>
				<!-- <DesktopMenu /> -->
			</div>
			<!-- <NavDropDown /> -->
		</div>
	</div>
	<!-- <MobileMenu /> -->
</nav>
