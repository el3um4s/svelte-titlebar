<script lang="ts">
	import { TitleBar } from '$lib/index';
</script>

<div class="container">
	<div class="full-width">
		<TitleBar title="full-width" />
	</div>
	<div class="left"><TitleBar title="left" /></div>
	<div class="right">
		<TitleBar title="right" --background-color="#991B1B" --text-color="#F3F4F6" />
	</div>
	<div class="center" style="--background-color:#78350F; --text-color:#A7F3D0;">
		<TitleBar title="center" />
	</div>
	<div class="center-left"><TitleBar title="center-left" class="theme-light" /></div>
	<div class="center-right"><TitleBar title="center-right" class="theme-dark" /></div>
	<div class="bottom" style="--background-color:#F3F4F6; --text-color:#991B1B">
		<TitleBar title="bottom" />
	</div>
	<div class="bottom-left"><TitleBar title="bottom-left" /></div>
	<div class="bottom-right theme-dark"><TitleBar title="bottom-right" /></div>
	<div class="mini-bottom"><TitleBar title="mini-bottom" /></div>
	<div class="mini-left theme-light"><TitleBar title="mini-left" /></div>
	<div class="mini-center"><TitleBar title="mini-center" /></div>
</div>

<style lang="postcss">
	.container {
		--background-color: #1e40af;
		--text-color: #fef3c7;
	}

	.left {
		--background-color: #fef3c7;
		--text-color: #1e40af;
	}

	.bottom-left {
		--background-color: theme('colors.green.800');
		--text-color: theme('colors.indigo.200');
	}

	.theme-light {
		--background-color: theme('colors.yellow.300');
		--text-color: theme('colors.indigo.800');
	}
	.theme-dark {
		--background-color: theme('colors.pink.900');
		--text-color: theme('colors.yellow.300');
	}
</style>
