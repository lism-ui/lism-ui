import { mergeFlexContextProps } from '../Flex/getProps';

export function getWithSideProps({
	variant,
	_lismClass = [],
	style = {},
	dataSide,
	sideW,
	mainMinW,
	bp = 'sm',
	// gt = {},
	...props
}) {
	_lismClass.push(`l--withSide`);
	if (variant) _lismClass.push(`l--withSide--${variant}`);

	let grid = {};
	if (dataSide) {
		props['data-lism-side'] = dataSide;
		grid = { gt: {} };
		grid.gt[bp] = '-';
	}
	if (null != sideW) {
		style['--side-w'] = sideW;
	}
	if (null != mainMinW) {
		style['--main-minW'] = mainMinW;
	}

	return Object.assign({ _lismClass, style, grid }, mergeFlexContextProps(props));
}
