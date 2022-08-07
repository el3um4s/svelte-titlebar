<script lang="ts">
	let customClass: string = '';
	export { customClass as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={customClass}
	data-testid="SVGIconMinimize"
	viewBox="0 0 10.2 1"
>
	<rect x="0" y="50%" width="10.2" height="1" />
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
