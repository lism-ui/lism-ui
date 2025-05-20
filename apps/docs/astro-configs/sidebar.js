export default [
	{
		label: 'Start Here',
		translations: {
			ja: 'はじめに',
		},
		items: [
			// Each item here is one entry in the navigation menu.
			{
				label: 'Overview',
				link: '/overview/',
				translations: {
					ja: '概要',
				},
			},
			{
				label: 'Getting Started',
				link: '/getting-started/',
			},

			// {
			// 	label: 'Example Guide',
			// 	link: '/guides/example/',
			// 	badge: '新規',
			// 	translations: {
			// 		ja: 'ここからはじめる',
			// 	},
			// },
		],
	},
	{
		label: 'Lism CSS',
		// items: [],
		autogenerate: {
			directory: 'css',
			collapsed: true,
		},
	},

	{
		// index.mdxでlabel名読み取ってるので変更時は注意
		label: 'Core Components',
		items: [
			{
				label: 'Lism',
				link: '/components/lism/',
			},
			{
				label: 'Text',
				link: '/components/text/',
			},
			{
				label: 'Link',
				link: '/components/link/',
			},
			{
				label: 'Media',
				link: '/components/media/',
			},
			{
				label: 'Dummy',
				link: '/components/dummy/',
			},
			{
				label: 'State',
				link: '###---',
			},
			{
				label: 'Container',
				link: '/components/container/',
			},
			{
				label: 'Layer',
				link: '/components/layer/',
			},
			{
				label: 'LinkBox',
				link: '/components/linkbox/',
			},
			{
				label: 'props',
				link: '###---',
			},
			{
				label: 'CSS Props',
				link: '/components/props/css-props/',
			},
			{
				label: 'Responsive Props',
				link: '/components/props/responsive-props/',
			},
			// {
			// 	label: 'getLismProps()',
			// 	link: '/props/get-lism-props/',
			// },

			{
				label: 'Layouts',
				link: '###---',
			},
			{
				label: '---',
				link: '###---',
			},
			{
				label: 'Flex',
				link: '/components/flex/',
			},
			{
				label: 'Stack',
				link: '/components/stack/',
			},
			{
				label: 'Reel',
				link: '/components/reel/',
			},
			{
				label: '---',
				link: '###---',
			},
			{
				label: 'Grid',
				link: '/components/grid/',
			},
			{
				label: 'GridItem',
				link: '/components/griditem/',
			},
			{
				label: 'Center',
				link: '/components/center/',
			},
			{
				label: 'Columns',
				link: '/components/columns/',
			},
			{
				label: '---',
				link: '###---',
			},
			{
				label: 'Box',
				link: '/components/box/',
			},
			{
				label: 'Frame',
				link: '/components/frame/',
			},
			{
				label: 'Divider',
				link: '/components/divider/',
			},
			{
				label: 'Spacer',
				link: '/components/spacer/',
			},
			{
				label: 'WithSide',
				link: '/components/withside/',
			},

			{
				label: '---',
				link: '###---',
			},
			{
				label: 'Decorator',
				link: '/components/decorator/',
			},
			{
				label: 'Icon',
				link: '/components/icon/',
			},

			{
				label: 'Dynamic',
				link: '###---',
			},
			{
				label: 'Accordion',
				link: '/components/accordion/',
			},
			{
				label: 'Modal',
				link: '/components/modal/',
			},
			{
				label: 'Tabs',
				link: '/components/tabs/',
			},
		],
	},
	{
		label: 'Opt-in Components',
		items: [
			{
				label: 'Avatar',
				link: '/components/avatar/',
			},
			{
				label: 'Badge',
				link: '/components/badge/',
			},
			{
				label: 'Button',
				link: '/components/button/',
			},

			{
				label: 'Banner',
				link: '/components/banner/',
			},
			{
				label: 'Callout',
				link: '/components/callout/',
			},
			{
				label: 'Card',
				link: '/components/card/',
			},
			{
				label: 'Chat',
				link: '/components/chat/',
			},
			{
				label: 'List',
				link: '/components/list/',
			},
			{
				label: 'Table',
				link: '/components/table/',
			},
			{
				label: 'Note',
				link: '/components/note/',
			},
			{
				label: 'NavMenu',
				link: '/components/navmenu/',
			},
			{
				label: 'ShapeDivider',
				link: '/components/shapedivider/',
			},

			{
				label: '---',
				link: '###---',
			},
			{
				label: 'More Examples',
				link: '###---',
			},
			{
				label: '---',
				link: '###---',
			},
			{
				label: 'Breadcrumb',
				link: '/components/breadcrumb/',
			},
			{
				label: 'BalloonBox',
				link: '/components/banner/',
			},
			{
				label: 'Decorations',
				link: '/components/decorations/',
			},
			{
				label: 'DividerLabel',
				link: '/components/dividerlabel/',
			},
			{
				label: 'FAQ',
				link: '/components/faq/',
			},
			{
				label: 'Hero',
				link: '/components/hero/',
			},

			{
				label: 'Steps',
				link: '/components/steps/',
			},
			{
				label: 'TermList',
				link: '/components/termlist/',
			},
			{
				label: 'Timeline',
				link: '/components/timeline/',
			},
			{
				label: '---',
				link: '###---',
			},
			{
				label: 'Others',
				link: '/components/others/',
			},
		],
	},
	{
		label: 'Page Layout',
		// items: [],
		autogenerate: {
			directory: 'page-layout',
		},
	},
	{
		label: 'Others',
		// items: [],
		autogenerate: {
			directory: 'others',
		},
	},
];
