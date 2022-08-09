<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import IconClose from './icons/_IconClose.svelte';
	import IconMinimize from './icons/_IconMinimize.svelte';
	import IconMaximize from './icons/_IconMaximize.svelte';
	import IconUnmaximize from './icons/_IconUnmaximize.svelte';

	export let title: string = 'Title';
	export let isMaximized: boolean = false;

	let className = '';
	export { className as class };

	$: className = className || '';
	$: title = title || '';

	const dispatch = createEventDispatcher();
</script>

<header class={className}>
	<div class="drag-region" data-testid="drag-region">
		<div class="title" data-testid="title">
			<span>{title}</span>
		</div>
		<div class="window-controls">
			<IconMinimize on:clickMinimize={(e) => dispatch('clickMinimize', e)} />
			{#if isMaximized}
				<IconUnmaximize on:clickUnmaximize={(e) => dispatch('clickUnmaximize', e)} />
			{:else}
				<IconMaximize on:clickMaximize={(e) => dispatch('clickMaximize', e)} />
			{/if}
			<IconClose on:clickClose={(e) => dispatch('clickClose', e)} />
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		@apply h-8 w-full p-1 font-bold;
		background-color: var(--background-color, theme('colors.gray.800'));
		color: var(--text-color, theme('colors.gray.200'));
	}

	.drag-region {
		@apply grid w-full h-full;
		grid-template-columns: auto 138px;
		-webkit-app-region: drag;
	}
	.title {
		@apply flex items-center left-2 overflow-hidden font-sans text-base font-semibold;
	}

	.title span {
		@apply overflow-hidden overflow-ellipsis whitespace-nowrap leading-6;
	}

	.window-controls {
		@apply grid grid-cols-3 right-2 gap-2 select-none;
		-webkit-app-region: no-drag;
	}
	.button {
		@apply row-span-1 flex justify-center items-center w-9 h-full;
	}

	.button:hover {
		background-color: var(--text-color, theme('colors.gray.800'));
	}
</style>
