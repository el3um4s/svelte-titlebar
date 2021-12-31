<script lang="ts">
	import { base } from '$app/paths';
	import  Demo from '../components/Demo.svelte';
	import { SvelteInfo } from '@el3um4s/svelte-component-info';
	import infoSvelteComponents from './infoSvelteComponents.json';
</script>

<section>

<SvelteInfo
name="SvelteTitlebar"
urlPackage="@el3um4s/svelte-titlebar"
info={infoSvelteComponents['TitleBar.svelte']}
description="A Titlebar component for Svelte Projects"
--background-color="#f9fafb"
--text-color="#1f2937" >

<Demo slot="demo"/>

<span slot="test">

- [Default]({base}/test/titlebars/default)
- [Dark]({base}/test/titlebars/dark)
- [Light]({base}/test/titlebars/light)
- [Dark and Light]({base}/test/titlebars/dark-light)
- [Colors]({base}/test/titlebars/colors)

</span>

</SvelteInfo>

</section>

<style lang="postcss">
	section {
		width: 100%;
		max-width: 70ch;
		padding: auto 1em;
		margin: auto;
		line-height: 1.75;
		font-size: 1.25em;
		margin-bottom: 1px;
	}
</style>
