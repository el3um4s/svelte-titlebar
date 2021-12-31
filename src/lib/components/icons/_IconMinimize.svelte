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
	data-testid="SVGIconMinimize"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="3"
		d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
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
