<script lang="ts">
	import { base } from '$app/paths';

	import { TitleBar } from '$lib/index';
	import { SvelteInfo } from '@el3um4s/svelte-component-info';
	import infoSvelteComponents from './infoSvelteComponents.json';

	let title = 'Title';
	let isMaximized = false;
	let theme = 'theme-light';

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

	function unmaximize() {
		log('unmaximize');
		isMaximized = false;
	}

	function maximize() {
		log('maximize');
		isMaximized = true;
	}

	let backgroundColor = '#e5e7eb';
	let textColor = '#1f2937';

	$: if (theme === 'theme-light') {
		backgroundColor = '#e5e7eb';
		textColor = '#1f2937';
	}

	$: if (theme === 'theme-dark') {
		backgroundColor = '#1f2937';
		textColor = '#e5e7eb';
	}
</script>

<section class="svelte-info">
	<SvelteInfo
		name="SvelteTitlebar"
		urlPackage="@el3um4s/svelte-titlebar"
		info={infoSvelteComponents['TitleBar.svelte']}
		description="A Titlebar component for Svelte Projects"
		--background-color="#f9fafb"
		--text-color="#1f2937"
	>
		<span slot="demo">
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
			<div class="details">
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
			</div>
		</span>
		<span slot="test">
			<div>
				<a href="{base}/test/titlebars/default">Default</a>
			</div>
			<div>
				<a href="{base}/test/titlebars/dark">Dark</a>
			</div>
			<div>
				<a href="{base}/test/titlebars/light">Light</a>
			</div>
			<div>
				<a href="{base}/test/titlebars/dark-light">Dark and Light</a>
			</div>
			<div>
				<a href="{base}/test/titlebars/colors">Colors</a>
			</div>
		</span>
	</SvelteInfo>
</section>

<style lang="postcss">
	section {
		width: 100%;
		max-width: 70ch;
		padding: auto 1em;
		margin: auto;
		line-height: 1.75;
		font-size: 1.25em;
	}

	.log {
		@apply w-full;
	}

	.titlebar {
		@apply mt-4 mb-4 w-full border-2 border-gray-900;
	}

	.details {
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

	.svelte-info {
		width: 100%;
		max-width: 70ch;
		padding: auto 1em;
		margin: auto;
		line-height: 1.75;
		font-size: 1.25em;
		margin-bottom: 1px;
	}
</style>
