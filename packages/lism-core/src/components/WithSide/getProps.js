import { mergeFlexContextProps } from '../Flex/getProps';

export function getWithSideProps({
	variant,
	_lismClass = [],
	style = {},
	dataSide,
	sideW,
	mainMinW,
	bp,
	...props
}) {
	_lismClass.push(`l--withSide`);
	if (variant) _lismClass.push(`l--withSide--${variant}`);

	let grid = {};
	if (dataSide) {
		props['data-lism-side'] = dataSide;
		if (bp) {
			grid = { gd: {} };
			grid.gd[bp] = 'var(--gd--hz)';
		}
	}
	if (null != sideW) {
		style['--side-w'] = sideW;
	}
	if (null != mainMinW) {
		style['--main-minW'] = mainMinW;
	}

	return Object.assign({ _lismClass, style, grid }, mergeFlexContextProps(props));
}
