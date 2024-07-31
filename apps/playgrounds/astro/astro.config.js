import { defineConfig } from 'astro/config';
// import react from '@astrojs/react'; // react 使う場合に使用

// https://astro.build/config
export default defineConfig({
	// integrations: [react()], // react 使う場合に使用
	vite: {
		resolve: {
			alias: {
				'~/': '/src/',
			},
		},
	},
});
