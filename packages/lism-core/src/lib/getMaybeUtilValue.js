import { UTILITIES } from '../config';

// ユーティリティ化できるキーワードのチェック
export default function getMaybeUtilValue(utils, value) {
	let utilValues = '';
	if (typeof utils === 'string') {
		utilValues = UTILITIES[utils];
	} else {
		utilValues = utils;
	}

	if (null == utilValues || typeof utilValues !== 'object') return '';

	// 厳密には配列もアウト
	// if (Array.isArray(utilValues)) return false;

	// 数値→文字列化 ← しない。 spaceプリセット受け取りたい時に 数値 と文字列で分けれるようにするため。
	// if (typeof value === 'number') {
	// 	value = `${value}`;
	// }

	// fullname
	if (utilValues?.[value]) {
		return utilValues[value];
	}

	// shortname
	if (Object.values(utilValues).includes(value)) {
		return value;
	}

	return '';
}
