import fs from 'fs';
// import fs from 'fs';
import path from 'path';
import { bundleNRequire } from 'bundle-n-require';

export async function bundle(fileName) {
	// const cwd = options.cwd ?? options?.config?.cwd ?? process.cwd()
	// const cwd = process.cwd();
	const { mod: config, dependencies } = await bundleNRequire(fileName);
	console.log('config', config);
	// return { config: (config?.default ?? config) as T, dependencies }
}

const configFiles = [
	'lism-config.js',
	'lism-config.ts', //'lism-config.mjs'
];

let userConfigFileName = '';
configFiles.forEach((configFileName) => {
	// look-it-up 使うべき？
	const userConfigPath = path.join(process.cwd(), configFileName);

	if (!fs.existsSync(userConfigPath)) return;
	userConfigFileName = configFileName;
});

// async function getUserConfig(filePath) {
// 	let userConfig = null;
// 	try {
// 		// if (await fs.stat(filePath)) {
// 		userConfig = (await import(filePath)).default;
// 	} catch (error) {
// 		console.error('User config not found or invalid', error);
// 	}

// 	return userConfig;
// }

console.log('userConfigFileName', userConfigFileName);

if (userConfigFileName) {
	const userConfig = bundle(userConfigFileName);
	console.log('userConfig', userConfig);
}
