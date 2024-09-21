import atts from '../../lib/helper/atts';
import { mergeFlexContextProps } from '../Flex/getProps';

export function getWithSideProps({
	variant,
	lismClass,
	style = {},
	sidePosition,
	sideW,
	mainMinW,
	bp,
	...props
}) {
	let grid = {};
	if (sidePosition) {
		props['data-side-position'] = sidePosition;
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

	return Object.assign(
		{
			lismClass: atts(lismClass, `l--withSide`, variant && `l--withSide--${variant}`),
			style,
			grid,
		},
		mergeFlexContextProps(props)
	);
}
