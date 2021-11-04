<!-- https://heroicons.com/ -->
<script lang="ts">
	let customClass: string = '';
	export { customClass as class };
	export let height: string | number = 24;
	export let width: string | number = 24;
</script>

<svg
	xmlns="http://www.w3.org/2000/svg"
	class={customClass}
	viewBox="0 0 20 20"
	fill="currentColor"
	{height}
	{width}
	data-testid="SVGIconMinimize"
>
	<path
		fill-rule="evenodd"
		d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
		clip-rule="evenodd"
	/>
</svg>
