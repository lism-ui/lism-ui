export default function getTabProps(
	{ isVertical, keepHeight, listProps = {}, panelProps = {}, ...props },
	variant
) {
	let dataTabs = [];
	let _listProps = {};
	let _panelProps = {};

	const defaultProps = {
		gap: 'em8',
	};

	if (isVertical) {
		// props.gt = 'side:s';
		// _panelProps.gcs = 2;
		// _panelProps.grs = 1;
		// _listProps.as = 'Stack';
		// _panelProps.ai = 's';

		dataTabs.push('vertical');
	} else {
		// panelProps = Object.assign({}, panelProps, { gcs: 1, grs: 2 });
	}

	if (variant === 'box') {
		_listProps.bgc = 'base-3';
		_listProps.p = '5';
		_listProps.gap = 'em4';
		_listProps.bdrs = 's';
	}

	if (keepHeight) {
		dataTabs.push('keep-height');
	}
	if (dataTabs.length) {
		props['data-tabs'] = dataTabs.join(' ');
	}

	if (dataTabs.length) {
		props['data-tabs'] = dataTabs.join(' ');
	}

	return {
		tabProps: Object.assign(defaultProps, props),
		listProps: Object.assign(_listProps, listProps),
		panelProps: Object.assign(_panelProps, panelProps),
	};
}
