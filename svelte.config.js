import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import dsv from '@rollup/plugin-dsv';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),

	kit: {
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			fallback: null,
			precompress: false
		}),

		vite: {
			plugins: [
				dsv()
			]
		}
	}
};

export default config;
