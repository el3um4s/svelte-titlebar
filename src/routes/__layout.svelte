<script>
	import '../app.css';
</script>

<main>
	<slot />
</main>

<style lang="postcss">
	main {
		@apply w-screen flex-1 flex flex-col justify-center items-center p-1 box-border;
	}
</style>
