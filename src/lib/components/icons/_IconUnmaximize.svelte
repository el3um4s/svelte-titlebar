<script lang="ts">
	let customClass: string = '';
	export { customClass as class };
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={customClass}
	data-testid="SVGIconUnmaximize"
	viewBox="0 0 10.2 10.1"
	><path
		d="M2.1,0v2H0v8.1h8.2v-2h2V0H2.1z M7.2,9.2H1.1V3h6.1V9.2z M9.2,7.1h-1V2H3.1V1h6.1V7.1z"
	/></svg
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
