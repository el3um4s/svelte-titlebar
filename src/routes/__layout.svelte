<script lang="ts">
	import '../app.css';
</script>

<main>
	<slot></slot>
</main>


<style lang="postcss">
	main{
		@apply w-screen h-screen flex-1 flex flex-col mt-0 box-border;
	}
</style>

