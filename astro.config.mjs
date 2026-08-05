// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://douglasmaia.dev.br',
	i18n: {
		defaultLocale: 'pt-br',
		locales: ['pt-br', 'en'],
		routing: {
			prefixDefaultLocale: false,
		},
	},
	integrations: [
		sitemap({
			i18n: {
				defaultLocale: 'pt-br',
				locales: {
					'pt-br': 'pt-BR',
					en: 'en',
				},
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
