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

<style lang="postcss">
	html,
	body,
	.container {
		width: 100%;
		height: 100%;
		margin: 0;
	}

	.container * {
		border: 1px solid red;
		position: relative;
	}

	/* .container *:after {
		content: attr(class);
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		display: grid;
		align-items: center;
		justify-content: center;
	} */

	.container {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
		grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
		gap: 0px 0px;
		grid-auto-flow: row;
		grid-template-areas:
			'full-width full-width full-width full-width full-width'
			'left center center center right'
			'left center-left mini-center center-right right'
			'left mini-left bottom-right bottom-right right'
			'left bottom-left bottom-left mini-bottom right'
			'left bottom bottom bottom right';
	}

	.full-width {
		grid-area: full-width;
	}

	.left {
		grid-area: left;
	}

	.right {
		grid-area: right;
	}

	.center {
		grid-area: center;
	}

	.center-left {
		grid-area: center-left;
	}

	.center-right {
		grid-area: center-right;
	}

	.bottom {
		grid-area: bottom;
	}

	.bottom-left {
		grid-area: bottom-left;
	}

	.bottom-right {
		grid-area: bottom-right;
	}

	.mini-bottom {
		grid-area: mini-bottom;
	}

	.mini-left {
		grid-area: mini-left;
	}

	.mini-center {
		grid-area: mini-center;
	}
</style>
