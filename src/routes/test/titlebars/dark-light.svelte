<script lang="ts">
	import { TitleBar } from '$lib/index';

	let dark = 'theme-dark';
	let light = 'theme-light';
</script>

<div class="container">
	<div class="full-width">
		<TitleBar title="full-width" />
	</div>
	<div class="left"><TitleBar title="left" class={dark} /></div>
	<div class="right"><TitleBar title="right" class={dark} /></div>
	<div class="center"><TitleBar title="center" class={dark} /></div>
	<div class="center-left"><TitleBar title="center-left" class={light} /></div>
	<div class="center-right"><TitleBar title="center-right" class={light} /></div>
	<div class="bottom"><TitleBar title="bottom" class={light} /></div>
	<div class="bottom-left"><TitleBar title="bottom-left" class={light} /></div>
	<div class="bottom-right"><TitleBar title="bottom-right" class={dark} /></div>
	<div class="mini-bottom"><TitleBar title="mini-bottom" class={dark} /></div>
	<div class="mini-left"><TitleBar title="mini-left" class={dark} /></div>
	<div class="mini-center"><TitleBar title="mini-center" class={light} /></div>
</div>
