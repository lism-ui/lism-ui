export default function getTabsProps({
	_lismClass = [],
	variant = 'line',
	isVertical,
	keepHeight,
	listProps = {},
	panelProps = {},
	...props
}) {
	_lismClass.push('c--tabs');
	variant && _lismClass.push(`c--tabs--${variant}`);

	let dataTabs = [];
	let _listProps = {};
	let _panelProps = {};

	const defaultProps = {
		_lismClass,
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

export function getTabListProps({ _lismClass = [], ...props }) {
	_lismClass.push('c--tabs__list');
	// if (variant) _lismClass.push(`c--tabs__list--${variant}`);

	const defaultProps = {
		_lismClass,
		jc: 's',
		role: 'tablist',
	};
	return Object.assign(defaultProps, props);
}

export function getTabPanelProps({ _lismClass = [], ...props }, isActive) {
	_lismClass.push('c--tabs__panel');

	const defaultProps = {
		_lismClass,
		role: 'tabpanel',
		'aria-hidden': isActive ? 'false' : 'true',
	};
	return Object.assign(defaultProps, props);
}
export function getTabProps({ _lismClass = [], ...props }, isActive) {
	_lismClass.push('c--tabs__tab');

	const defaultProps = {
		skipState: true,
		_lismClass,
		tag: 'button',
		fz: 's',
		lh: 'xs',
		lismState: ['is--reset'],
		role: 'tab',
		'aria-selected': isActive ? 'true' : 'false',
	};
	return Object.assign(defaultProps, props);
}
