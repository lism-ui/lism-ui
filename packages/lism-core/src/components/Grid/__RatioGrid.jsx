import Grid from './Grid';
import { isEmptyObj, objMap } from '../../lib/helper';
import { getBpData } from '../../lib';

// 1:2:3 → 1fr 2fr 3fr に変換
function getFrs(ratio) {
	if (!ratio) return null;

	// ":" で分解し、配列化し、その配列要素に "fr" を付けて連結

	const splitArray = ratio.split(':');
	const result = splitArray.map((s) => `${s}fr`).join(' ');

	return result.trim();
}

export default function RatioGrid({ ratio, lismStyle = {}, ...props }) {
	// ratioをBPobj化し、各値に getFrs() を適用する
	let { _: baseValue, ...bpValues } = objMap(getBpData(ratio), getFrs);

	const gridProps = {
		// _gridName: 'ratioGrid',
		variant: 'ratio',
	};

	if (null != baseValue) {
		lismStyle['--gtc'] = baseValue;
	}

	if (!isEmptyObj(bpValues)) {
		gridProps.gtc = bpValues;
	}

	return <Grid {...gridProps} lismStyle={lismStyle} {...props} />;
}
