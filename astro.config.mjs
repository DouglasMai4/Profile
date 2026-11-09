// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import { satteri } from '@astrojs/markdown-satteri';

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
	markdown: {
		processor: satteri({
			hastPlugins: [
				{
					name: 'external-links',
					element: {
						filter: ['a'],
						visit(node, ctx) {
							const href = String(node.properties?.href ?? '');
							if (!/^https?:\/\//.test(href) || href.startsWith('https://douglasmaia.dev.br')) return;
							ctx.setProperty(node, 'target', '_blank');
							ctx.setProperty(node, 'rel', ['noopener', 'noreferrer']);
						},
					},
				},
			],
		}),
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
