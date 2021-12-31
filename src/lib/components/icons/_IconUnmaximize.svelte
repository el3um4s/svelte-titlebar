<!-- https://heroicons.com/ -->
<script lang="ts">
	let customClass: string = '';
	export { customClass as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={customClass}
	fill="none"
	viewBox="0 0 24 24"
	stroke="none"
	data-testid="SVGIconUnmaximize"
>
	<path
		stroke-linecap="round"
		stroke-linejoin="round"
		stroke-width="3"
		d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"
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
