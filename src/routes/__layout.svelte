<script context="module">
	export const load = async ({ page }) => {
		return {
			props: {
				key: page.path,
				host: page.host
			}
		};
	};
</script>

<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';
	import PageTransition from '../components/PageTransition.svelte';
	import Header from '../components/Header.svelte';
	export let key: string;
	export let host: string;
	const home: string = '//' + host + base;
	let links = [
		{ href: `${home}`, label: 'Home', visible: false },
		{ href: 'https://github.com/el3um4s/svelte-titlebar', label: 'GitHub', visible: true },
		{
			href: 'https://www.npmjs.com/package/@el3um4s/svelte-titlebar',
			label: 'NPM',
			visible: true
		}
	];
	$: if (key !== '/') {
		links[0].visible = true;
	} else {
		links[0].visible = false;
	}
</script>

<Header {links} />
<PageTransition refresh={key}>
	<slot />
</PageTransition>
