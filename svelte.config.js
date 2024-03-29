import {
	mdsvex
} from 'mdsvex';
import mdsvexConfig from './mdsvex.config.js';
import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			style: 'postcss',
			script: 'typescript',
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	],

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		// target: '#svelte',
		prerender: {
			crawl: true,
			enabled: true,
			onError: 'continue',
			default: true
		},
		package: {
			dir: 'package',
			emitTypes: true
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null
		}),
		paths: {
			base: '/svelte-titlebar'
		}
	}
};

export default config;