<!-- https://heroicons.com/ -->
<script lang="ts">
	let customClass: string = '';
	export { customClass as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={customClass}
	viewBox="0 0 20 20"
	fill="none"
	data-testid="SVGIconClose"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="3"
		d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
	/>
</svg>

<style lang="postcss">
	svg {
		@apply h-6 w-6;
		background-color: var(--background-color, theme('colors.gray.50'));
		stroke: var(--text-color, theme('colors.gray.800'));
	}
	svg:hover {
		stroke: var(--background-color, theme('colors.gray.50'));
		background-color: var(--text-color, theme('colors.gray.800'));
	}
</style>
