<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	import IconClose from './icons/_IconClose.svelte';
	import IconMinimize from './icons/_IconMinimize.svelte';
	import IconMaximize from './icons/_IconMaximize.svelte';
	import IconUnmaximize from './icons/_IconUnmaximize.svelte';

	export let title = 'Title';
	export let isMaximized = false;

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
			<div class="button" data-testid="IconMinimize" on:click={(e) => dispatch('clickMinimize', e)}>
				<IconMinimize />
			</div>
			{#if isMaximized}
				<div
					class="button"
					data-testid="IconUnmaximize"
					on:click={(e) => dispatch('clickUnmaximize', e)}
				>
					<IconUnmaximize />
				</div>
			{:else}
				<div
					class="button"
					data-testid="IconMaximize"
					on:click={(e) => dispatch('clickMaximize', e)}
				>
					<IconMaximize />
				</div>
			{/if}
			<div class="button" data-testid="IconClose" on:click={(e) => dispatch('clickClose', e)}>
				<IconClose />
			</div>
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
		background-color: var(--text-color);
		color: var(--background-color);
	}
</style>
