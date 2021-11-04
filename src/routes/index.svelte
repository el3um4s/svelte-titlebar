<script lang="ts">
	import { TitleBar } from '$lib/index';
	let title = 'Title';

	function changeTitle() {
		title = 'New Title';
	}
</script>

<TitleBar {title} />

<button on:click={changeTitle}>Change Title</button>
