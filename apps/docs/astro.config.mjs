import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import react from '@astrojs/react';
// import mdx from '@astrojs/mdx';
// import markdoc from '@astrojs/markdoc';
import sidebar from './astro-configs/sidebar';
import locales from './astro-configs/locales';
// import purgecss from 'astro-purgecss';

// https://astro.build/config
export default defineConfig({
	// markdown: {
	// 	// remarkPlugins: [remarkPlugin1],
	// 	gfm: true,
	// },

	devToolbar: {
		enabled: false,
	},
	integrations: [
		// {
		// 	// customCssだと順番が環境によって変わる。絶対に先に読み込みたいものはここに。
		// 	name: 'importStyleCSS',
		// 	hooks: {
		// 		'astro:config:setup': ({ injectScript }) => {
		// 			injectScript('page-ssr', `import '@lism-ui/core/scss/all.scss';`);
		// 		},
		// 	},
		// },
		react(),
		// mdx(), // 基本はmarkdownを継承する
		starlight({
			title: 'Lism UI',
			// logo: {
			// 	src: './src/assets/my-logo.svg',
			// replacesTitle: true,
			// },
			// favicon: '/images/favicon.svg',
			// このサイトのデフォルト言語として英語を設定します。
			defaultLocale: 'root',
			locales,
			customCss: [
				// '@lism-ui/core/css/all.css',
				// '@lism-ui/core/scss/all.scss',
				// './src/styles/lism-custom.scss', // カスタムCSSファイルへの相対パス
				'./src/styles/docs.scss',
				'./src/styles/lism.scss',
			],
			sidebar,
			social: [
				{ icon: 'github', label: 'GitHub', href: 'https://github.com/lism-ui/lism-ui' },
			],
			editLink: {
				baseUrl: 'https://github.com/lism-ui/lism-ui/tree/main/apps/docs',
			},
			// コードブロックのカスタマイズ: https://starlight.astro.build/ja/reference/configuration/#expressivecode
			expressiveCode: {
				styleOverrides: {
					borderRadius: '0.25rem',
				},
				// themes: ['starlight-dark', 'starlight-light'],
				themes: ['github-dark', 'github-light'],
				useStarlightDarkModeSwitch: true,
			},
			// https://starlight.astro.build/guides/overriding-components/
			components: {
				// デフォルトの`SocialIcons`コンポーネントをオーバーライドします。
				// SocialIcons: './src/components/EmailLink.astro',
				MarkdownContent: './src/starlight/MarkdownContent.astro',
				ThemeSelect: './src/starlight/ThemeSelect.astro',
				Sidebar: './src/starlight/Sidebar.astro',
				// SidebarSublist: './src/starlight/SidebarSublist.astro',
				Hero: './src/starlight/Hero.astro',
			},
		}),
		// tailwind({
		// 	// デフォルトのベーススタイルを無効にする
		// 	applyBaseStyles: false,
		// }),
		// purgecss(),
	],
	vite: {
		// ssr: {
		// 	noExternal: ['@lism-ui/core'],
		// },
		resolve: {
			// dedupe: ['@lism-ui/core'],
			alias: {
				// react: path.join(__dirname, 'node_modules/react'),
				'~/': '/src/',
			},
		},
	},
});
