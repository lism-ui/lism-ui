import { PRESETS } from '../config';

export default function isPresetValue(presets, value) {
	let presetValues = [];
	if (typeof presets === 'string') {
		presetValues = PRESETS[presets];
	} else {
		presetValues = presets;
	}

	if (!Array.isArray(presetValues)) return false;

	// 数値の時は文字列化してから判定
	if (typeof value === 'number') {
		return presetValues.includes(`${value}`);
	}
	return presetValues.includes(value);
}
