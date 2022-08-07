<script lang="ts">
	let customClass: string = '';
	export { customClass as class };
</script>

<svg
	viewBox="0 0 10 10"
	xmlns="http://www.w3.org/2000/svg"
	class={customClass}
	data-testid="SVGIconMaximize"
>
	<path d="M0,0v10h10V0H0z M9,9H1V1h8V9z" /></svg
>

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
