<script lang="ts">
	import { TitleBar } from '$lib/index';

	let title = 'Title';
	let isMaximized = false;
	let theme = 'theme-light';
	let backgroundColor = '#e5e7eb';
	let textColor = '#1f2937';

	let logs = '';
	const log = (l: string) => {
		logs = l;
	};

	let themes = [
		{ id: 'theme-light', text: 'Light' },
		{ id: 'theme-dark', text: 'Dark' },
		{ id: 'custom', text: 'Custom' }
	];

	$: setInterval(() => {
		logs = '';
	}, 1500);

	$: if (theme === 'theme-light') {
		backgroundColor = '#e5e7eb';
		textColor = '#1f2937';
	}

	$: if (theme === 'theme-dark') {
		backgroundColor = '#1f2937';
		textColor = '#e5e7eb';
	}

	function unmaximize() {
		log('unmaximize');
		isMaximized = false;
	}

	function maximize() {
		log('maximize');
		isMaximized = true;
	}
</script>

<div>
	<section>
		<TitleBar
			{title}
			{isMaximized}
			on:clickMinimize={() => log('minimize')}
			on:clickUnmaximize={unmaximize}
			on:clickMaximize={maximize}
			on:clickClose={() => log('close')}
			class={theme}
			--background-color={backgroundColor}
			--text-color={textColor}
		/>

		<div class="log" style="background-color:{backgroundColor}; color:{textColor};">
			Click: {logs}
		</div>
	</section>

	<section>
		<label>
			<span class="label">title</span>
			<input type="text" bind:value={title} />
		</label>
		<label>
			<span class="label">isMaximized</span>
			<input type="checkbox" bind:checked={isMaximized} />
		</label>
		<label>
			<span class="label">Themes</span>
			<select bind:value={theme} class="themes">
				{#each themes as t}
					<option value={t.id}>
						{t.text}
					</option>
				{/each}
			</select>
		</label>
		{#if theme === 'custom'}
			<label>
				<span class="label">--background-color</span>
				<input type="color" bind:value={backgroundColor} />
			</label>
			<label>
				<span class="label">--text-color</span>
				<input type="color" bind:value={textColor} />
			</label>
		{/if}
	</section>
</div>

<style lang="postcss">
	section {
		@apply flex flex-col;
	}

	span.label {
		@apply font-bold;
	}

	input[type='text'] {
		@apply h-full border-b border-gray-500 bg-gray-50;
	}

	.themes {
		@apply w-24 border-b border-gray-500 bg-gray-50;
	}
</style>
