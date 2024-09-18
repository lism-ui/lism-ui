export default function convertToMsNumber(time) {
	let totalMilliseconds = 0;

	// 秒を変換
	const secondsMatch = time.match(/([\d.]+)s/);
	if (secondsMatch) {
		totalMilliseconds = parseFloat(secondsMatch[1]) * 1000;
	}

	// ミリ秒を変換
	const millisecondsMatch = time.match(/([\d.]+)ms/);
	if (millisecondsMatch) {
		totalMilliseconds = parseFloat(millisecondsMatch[1]);
	}

	return Math.round(totalMilliseconds); // 少数点以下を丸める
}
