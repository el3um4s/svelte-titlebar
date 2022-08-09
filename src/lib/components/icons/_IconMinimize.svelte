<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let customClass: string = '';
	export { customClass as class };

	const dispatch = createEventDispatcher();
</script>

<div class="button" data-testid="IconMinimize" on:click={(e) => dispatch('clickMinimize', e)}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class={customClass}
		data-testid="SVGIconMinimize"
		viewBox="0 0 10.2 1"
	>
		<rect x="0" y="50%" width="10.2" height="1" />
	</svg>
</div>

<style lang="postcss">
	.button {
		@apply row-span-1 flex justify-center items-center w-9 h-full;
		background-color: var(--background-color, theme('colors.gray.50'));
	}

	.button:hover {
		background-color: var(--text-color, theme('colors.gray.800'));
	}
	.button svg {
		@apply h-3 w-3;
		background-color: var(--background-color, theme('colors.gray.50'));
		fill: var(--text-color, theme('colors.gray.800'));
	}
	.button:hover svg {
		background-color: var(--text-color, theme('colors.gray.800'));
		fill: var(--background-color, theme('colors.gray.50'));
	}
</style>
