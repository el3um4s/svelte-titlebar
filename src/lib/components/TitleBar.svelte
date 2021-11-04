<script lang="ts">
	import IconClose from './icons/_IconClose.svelte';
	import IconMinimize from './icons/_IconMinimize.svelte';
	import IconMaximize from './icons/_IconMaximize.svelte';
	import IconUnmaximize from './icons/_IconUnmaximize.svelte';

	export let title = 'Title';
	export let isMaximized = false;

	$: title = title || '';
</script>

<header>
	<div class="drag-region" data-testid="drag-region">
		<div class="title" data-testid="title">
			<span>{title}</span>
		</div>
		<div class="window-controls">
			<div class="button" data-testid="IconMinimize">
				<IconMinimize />
			</div>
			{#if isMaximized}
				<div class="button" data-testid="IconUnmaximize">
					<IconUnmaximize />
				</div>
			{:else}
				<div class="button" data-testid="IconMaximize">
					<IconMaximize />
				</div>
			{/if}
			<div class="button" data-testid="IconClose">
				<IconClose />
			</div>
		</div>
	</div>
</header>

<style lang="postcss">
	header {
		@apply h-8 w-full p-1 font-bold bg-red-500;
	}

	.drag-region {
		@apply grid w-full h-full bg-green-500;
		grid-template-columns: auto 138px;
		-webkit-app-region: drag;
	}
	.title {
		@apply flex items-center left-2 overflow-hidden font-sans text-base bg-blue-400;
	}

	.title span {
		@apply overflow-hidden overflow-ellipsis whitespace-nowrap leading-6;
	}

	.window-controls {
		@apply grid grid-cols-3 right-2 gap-2 select-none bg-yellow-500;
		-webkit-app-region: no-drag;
	}
	.button {
		@apply row-span-1 flex justify-center items-center w-9 h-full;
	}
	.button:hover {
		@apply bg-purple-700;
	}
</style>
