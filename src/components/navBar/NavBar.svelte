<script>
	import { t } from 'svelte-i18n';
	import { logoIconAvif } from '$lib/assets/icons';
	import MobileMenu from './MobileMenu.svelte';
	import NavDropDown from './NavDropDown.svelte';
	import DesktopMenu from './DesktopMenu.svelte';
	import MobileMenuBtn from './MobileMenuBtn.svelte';
	import { DisplayStrong } from '$components/displays';
</script>

<nav class="max-h-[64px] bg-primary">
	<div class="px-2 sm:px-6 lg:px-8">
		<div class="relative flex h-16 items-center justify-between">
			<!-- <MobileMenuBtn /> -->
			<div class="flex flex-1 items-center justify-center sm:items-stretch md:justify-start">
				<div class="flex flex-shrink-0 items-center">
					<a href="/" class="flex items-center">
						<img class="scale-200 h-8 w-auto" src={logoIconAvif} alt="Your Company" />
						<DisplayStrong text={$t('website.title')} className="text-white pl-2" />
					</a>
				</div>
				<!-- <DesktopMenu /> -->
			</div>
			<!-- <NavDropDown /> -->
		</div>
	</div>
	<!-- <MobileMenu /> -->
</nav>
