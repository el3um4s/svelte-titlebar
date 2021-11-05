<script lang="ts">
	import { base } from '$app/paths';

	import { TitleBar } from '$lib/index';
	import Toggle from 'svelte-toggle';

	let language = 'EN';
	let toggled = language === 'EN' ? true : false;
	$: language = toggled ? 'EN' : 'IT';

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

	let backgroundColor = '#1e609f';
	let textColor = '#DBDBDB';

	const scriptUsage = `import { TitleBar } from " @el3um4s/svelte-titlebar";

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
/>`;
</script>

<section>
	<h1>Svelte-Titlebar</h1>
	<div>
		{#if language === 'EN'}
			<i>A Titlebar component for Svelte Projects</i>
		{:else}
			<i>Una semplice Titlebar da usare con Svelte</i>
		{/if}
	</div>

	<div class="toggle">
		<Toggle
			label=""
			switchColor="#eee"
			toggledColor="#10B981"
			untoggledColor="#3B82F6"
			on="EN"
			off="IT"
			bind:toggled
		/>
	</div>

	<div class="titlebar">
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
		<div class="log">Click: {logs}</div>
	</div>

	<div class="details">
		<div class="title">Props</div>
		<label>
			<span class="label">title</span>
			<input type="text" bind:value={title} />
		</label>
		<label>
			<span class="label">isMaximized</span>
			<input type="checkbox" bind:checked={isMaximized} />
		</label>
	</div>

	<div class="details">
		<div class="title">Events</div>
		<div>
			<span class="events-on">on</span>:<span class="events-name">clickMinimize</span>
		</div>
		<div>
			<span class="events-on">on</span>:<span class="events-name">clickUnmaximize</span>
		</div>
		<div>
			<span class="events-on">on</span>:<span class="events-name">clickMaximize</span>
		</div>
		<div>
			<span class="events-on">on</span>:<span class="events-name">clickClose</span>
		</div>
	</div>

	<div class="details">
		<div class="title">Colors</div>
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
</section>
{#if language === 'EN'}
	<section class="details">
		<div class="title">Install and use the package</div>
		<div class="instruction">
			<p>To use the package in a project:</p>
			<code>npm i -D @el3um4s/svelte-titlebar</code>
			<p>and then in a file:</p>
			<code style="white-space:pre">{scriptUsage}</code>
		</div>
	</section>
{:else}
	<section class="details">
		<div class="title">Come usare Svelte-Titlebar</div>
		<div class="instruction">
			<p>Installa il pacchetto nel progetto:</p>
			<code>npm i -D @el3um4s/svelte-titlebar</code>
			<p>Inserisci il componente in un file svelte:</p>
			<code style="white-space:pre">{scriptUsage}</code>
		</div>
	</section>
{/if}

<section class="details">
	<div class="title">Test e2e</div>
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

	h1,
	h2,
	h3,
	h4,
	h5,
	h6 {
		margin: 3em 0 1em;
	}

	p,
	ul,
	ol {
		margin-bottom: 2em;
		color: #1d1d1d;
		font-family: sans-serif;
	}
	.log {
		@apply w-full h-14 mt-3 p-2 bg-gray-900 text-yellow-200;
	}

	.titlebar {
		@apply mt-4 mb-4 w-full border-2 border-gray-900;
	}

	.details {
		@apply flex flex-col border border-gray-300 p-2 m-2;
	}

	.details .title {
		@apply bg-gray-200 text-gray-800 font-bold;
		margin-top: -8px;
		margin-left: -8px;
		margin-right: -8px;
	}

	span.label {
		@apply font-bold;
	}

	input[type='text'] {
		@apply h-full border-b border-gray-500 bg-gray-50;
	}
	span.events-name {
		@apply text-indigo-700 font-bold;
	}

	.themes {
		@apply w-24 border-b border-gray-500 bg-gray-50;
	}

	.instruction > p {
		margin-bottom: 0;
	}
</style>
