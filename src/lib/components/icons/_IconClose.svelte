<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let customClass: string = '';
	export { customClass as class };

	const dispatch = createEventDispatcher();
</script>

<div class="button" data-testid="IconClose" on:click={(e) => dispatch('clickClose', e)}>
	<svg viewBox="0 0 10 10" class={customClass} data-testid="SVGIconClose"
		><polygon
			points="10.2,0.7 9.5,0 5.1,4.4 0.7,0 0,0.7 4.4,5.1 0,9.5 0.7,10.2 5.1,5.8 9.5,10.2 10.2,9.5 5.8,5.1"
		/></svg
	>
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
