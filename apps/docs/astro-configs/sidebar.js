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
				label: 'Consepts',
				link: '/concepts/',
				translations: {
					ja: 'コンセプト',
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
		autogenerate: {
			directory: 'css',
		},
		// items: [
		// 	{
		// 		label: 'Tokens',
		// 		translations: {
		// 			ja: '概要',
		// 		},
		// 		autogenerate: {
		// 			directory: 'tokens',
		// 		},
		// 	},
		// ],
	},
	{
		label: 'Utility Props',
		autogenerate: {
			directory: 'props',
		},
	},
	{
		label: 'Components',
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
				label: 'Media',
				link: '/components/media/',
			},
			{
				label: 'Link',
				link: '/components/link/',
			},
			{
				label: 'Layout',
				link: '###',
			},
			// {
			// 	label: 'Layout',
			// 	autogenerate: {
			// 		directory: 'components/layout',
			// 	},
			// },
			{
				label: 'Flex',
				link: '/components/flex/',
			},
			{
				label: 'Cluster',
				link: '/components/cluster/',
			},
			{
				label: 'Stack',
				link: '/components/stack/',
			},
			{
				label: 'SideFlex',
				link: '/components/sideflex/',
			},
			{
				label: '---',
				link: '###',
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
				label: 'SideSwap',
				link: '/components/sideswap/',
			},
			{
				label: 'Columns',
				link: '/components/columns/',
			},
			{
				label: '---',
				link: '###',
			},
			{
				label: 'Box',
				link: '/components/box/',
			},
			// {
			// 	label: '---',
			// 	link: '###',
			// },
			{
				label: 'Center',
				link: '/components/center/',
			},

			{
				label: 'Layer',
				link: '/components/layer/',
			},
			{
				label: 'Reel',
				link: '/components/reel/',
			},
			{
				label: 'Spacer',
				link: '/components/spacer/',
			},
			{
				label: 'State',
				link: '###',
			},
			{
				label: 'Container',
				link: '/components/container/',
			},
			{
				label: 'Frame',
				link: '/components/frame/',
			},
			{
				label: 'LinkBox',
				link: '/components/linkbox/',
			},
			{
				label: 'Element',
				link: '###',
			},
			{
				label: 'Icon',
				link: '/components/icon/',
			},
			{
				label: 'Decorator',
				link: '/components/decorator/',
			},
			{
				label: 'Delimiter',
				link: '/components/delimiter/',
			},

			{
				label: 'Component',
				link: '###',
			},
			{
				label: 'Alert',
				link: '/components/alert/',
			},
			{
				label: 'Accordion',
				link: '/components/accordion/',
			},
			{
				label: 'Avatar',
				link: '/components/avatar/',
			},
			{
				label: 'Button',
				link: '/components/button/',
			},
			{
				label: 'Badge',
				link: '/components/badge/',
			},
			{
				label: 'Banner',
				link: '/components/banner/',
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
				label: 'Divider',
				link: '/components/divider/',
			},
			{
				label: 'ShapeDivider',
				link: '/components/shapedivider/',
			},
			{
				label: 'NavMenu',
				link: '/components/navmenu/',
			},
			{
				label: 'Note',
				link: '/components/note/',
			},
			{
				label: 'Tabs',
				link: '/components/tabs/',
			},
			{
				label: 'TermList',
				link: '/components/termlist/',
			},
			{
				label: 'Hero',
				link: '/components/hero/',
			},
			{
				label: '---',
				link: '###',
			},
			{
				label: 'FAQ',
				link: '/components/faq/',
			},
			{
				label: 'PriceMenu',
				link: '/components/pricemenu/',
			},
			{
				label: 'DecorationBox',
				link: '/components/decorationbox/',
			},
		],
	},
	// {
	// 	label: 'Element Modules',
	// 	items: [
	// 		{
	// 			label: 'Avatar',
	// 			link: '/components/props/',
	// 		},
	// 		{
	// 			label: 'Icon',
	// 			link: '/components/core/',
	// 		},
	// 	],
	// },
	// {
	// 	label: 'Component Modules',

	// 	items: [
	// 		{
	// 			label: 'Alert',
	// 			link: '/components/core/',
	// 		},
	// 		{
	// 			label: 'Accordion',
	// 			link: '/components/core/',
	// 		},
	// 		{
	// 			label: 'Button',
	// 			link: '/components/props/',
	// 		},
	// 	],
	// },

	{
		label: 'Page Layout',
		autogenerate: {
			directory: 'page-layout',
		},
	},
];
