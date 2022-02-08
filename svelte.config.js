import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import dsv from '@rollup/plugin-dsv';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
				dsv()
			]
		}
	}
};

export default config;
