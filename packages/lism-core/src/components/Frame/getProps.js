// import { getMaybeCssVar } from '../../lib';

export default function getFrameProps({
	lismStyle = {},
	lismState = [],
	objectPosition,
	...props
}) {
	lismState.push('is--frame');

	if (objectPosition) {
		lismStyle['--objectPosition'] = objectPosition;
	}

	return { lismState, lismStyle, ...props };
}
