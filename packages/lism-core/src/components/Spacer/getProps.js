import atts from '../../lib/helper/atts';
import getBpData from '../../lib/getBpData';
import getMaybeCssVar from '../../lib/getMaybeCssVar';

export default function getSpacerProps({ lismClass, variant, ...props }) {
	props.lismClass = atts(lismClass, 'b--spacer', variant && `b--spacer--${variant}`);

	if (null != props.h) {
		let hObj = getBpData(props.h);

		// getMaybeCssVar() を適用する
		hObj = Object.entries(hObj).reduce((newObj, [key, h]) => {
			newObj[key] = getMaybeCssVar(h, 'space');
			return newObj;
		}, {});

		props.h = hObj;
	}
	if (null != props.w) {
		let wObj = getBpData(props.w);

		// getMaybeCssVar() を適用する
		wObj = Object.entries(wObj).reduce((newObj, [key, w]) => {
			newObj[key] = getMaybeCssVar(w, 'space');
			return newObj;
		}, {});

		props.w = wObj;
	}

	return props;
}
