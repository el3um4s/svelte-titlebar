<script>
	import { base } from '$app/paths';

	import '../../../app.css';
	import './test.css';
</script>

<div>
	<a href={base}>Back</a>

	<slot />
</div>

<style lang="postcss">
	div {
		@apply w-screen h-screen flex-1 flex flex-col justify-center items-center p-1 box-border;
		min-height: calc(100vh - 48px);
	}

	a {
		@apply p-2 h-12 mb-2 no-underline bg-gray-700 text-gray-200 border rounded-lg text-center w-24;
	}
</style>
