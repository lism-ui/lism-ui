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
		autogenerate: {
			directory: 'css',
			collapsed: true,
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
	// {
	// 	label: 'Props',
	// 	autogenerate: {
	// 		directory: 'props',
	// 		collapsed: true,
	// 	},
	// },

	{
		label: 'Core Components',
		items: [
			{
				label: 'Lism',
				link: '/components/lism/',
			},
			{
				label: 'props',
				link: '###---',
			},
			{
				label: 'Lism Props',
				link: '/props/lism-props/',
			},
			{
				label: 'CSS Props',
				link: '/props/css-props/',
			},
			{
				label: 'Responsive Props',
				link: '/props/responsive-props/',
			},
			{
				label: 'getLismProps()',
				link: '/props/get-lism-props/',
			},
			{
				label: 'Layouts',
				link: '###---',
			},
			// {
			// 	label: 'Layout',
			// 	autogenerate: {
			// 		directory: 'components/layout',
			// 	},
			// },
			{
				label: 'Box',
				link: '/components/box/',
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
				label: 'FlexItem',
				link: '/components/flexitem/',
			},
			{
				label: 'Stack',
				link: '/components/stack/',
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
				label: '---',
				link: '###---',
			},

			// {
			// 	label: '---',
			// 	link: '###---',
			// },
			{
				label: 'Center',
				link: '/components/center/',
			},
			{
				label: 'Frame',
				link: '/components/frame/',
			},
			{
				label: 'Columns',
				link: '/components/columns/',
			},
			{
				label: 'Reel',
				link: '/components/reel/',
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
				label: 'WithSide',
				link: '/components/withside/',
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
			{
				label: 'Atoms',
				link: '###---',
			},
			{
				label: 'Decorator',
				link: '/components/decorator/',
			},
			{
				label: 'Divider',
				link: '/components/divider/',
			},
			{
				label: 'Icon',
				link: '/components/icon/',
			},
			{
				label: 'Spacer',
				link: '/components/spacer/',
			},
		],
	},
	{
		label: 'Opt-in Components',
		items: [
			{
				label: 'Blocks',
				link: '###---',
			},
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
				label: 'DividerLabel',
				link: '/components/dividerlabel/',
			},
			{
				label: 'ShapeDivider',
				link: '/components/shapedivider/',
			},

			{
				label: 'Components',
				link: '###---',
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
				label: 'Note',
				link: '/components/note/',
			},
			{
				label: 'NavMenu',
				link: '/components/navmenu/',
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
				label: 'Decorations',
				link: '/components/decorations/',
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
				label: 'Step',
				link: '/components/step/',
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
		label: 'Styles',
		autogenerate: {
			directory: 'styles',
			collapsed: true,
		},
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
	// 			label: 'Callout',
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
