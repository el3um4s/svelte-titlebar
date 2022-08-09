<script lang="ts">
	import { createEventDispatcher } from 'svelte';

	let customClass: string = '';
	export { customClass as class };

	const dispatch = createEventDispatcher();
</script>

<div class="button" data-testid="IconUnmaximize" on:click={(e) => dispatch('clickUnmaximize', e)}>
	<svg
		xmlns="http://www.w3.org/2000/svg"
		class={customClass}
		data-testid="SVGIconUnmaximize"
		viewBox="0 0 10.2 10.1"
		><path
			d="M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z"
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
