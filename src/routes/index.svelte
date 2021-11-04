<script lang="ts">
	import { TitleBar } from '$lib/index';
	let title = 'Title';
	let isMaximized = false;

	let logs = '';
	const log = (l: string) => {
		logs = l;
	};

	$: setInterval(() => {
		logs = '';
	}, 1500);

	function unmaximize() {
		log('unmaximize');
		isMaximized = false;
	}

	function maximize() {
		log('maximize');
		isMaximized = true;
	}
</script>

<TitleBar
	{title}
	{isMaximized}
	on:clickMinimize={() => log('minimize')}
	on:clickUnmaximize={unmaximize}
	on:clickMaximize={maximize}
	on:clickClose={() => log('close')}
/>

<div>Click: {logs}</div>

<style lang="postcss">
	div {
		@apply w-full h-24 mt-3 p-2 bg-gray-900 text-yellow-200;
	}
</style>
