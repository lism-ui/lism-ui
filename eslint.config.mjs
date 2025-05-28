import react from 'eslint-plugin-react';
import eslintConfigPrettier from 'eslint-config-prettier/flat';
import globals from 'globals';
import js from '@eslint/js';

// import { defineConfig } from 'eslint/config';
// import path from 'node:path';
// import { fileURLToPath } from 'node:url';

// import { FlatCompat } from '@eslint/eslintrc';

// const __filename = fileURLToPath(import.meta.url);
// const __dirname = path.dirname(__filename);
// const compat = new FlatCompat({
// 	baseDirectory: __dirname,
// 	recommendedConfig: js.configs.recommended,
// 	allConfig: js.configs.all,
// });

export default [
	eslintConfigPrettier,
	js.configs.recommended,
	{
		languageOptions: {
			globals: {
				...globals.browser,
				...globals.node,
			},

			ecmaVersion: 'latest',
			sourceType: 'module',
		},
	},
	{
		// extends: compat.extends('plugin:react/recommended'),
		settings: {
			react: {
				version: '18',
			},
		},
		plugins: {
			react,
		},
		rules: {
			'react/react-in-jsx-scope': 0,
			'react/prop-types': 0,

			'react/no-unknown-property': [
				2,
				{
					ignore: ['jsx', 'global'],
				},
			],
		},
	},
];
