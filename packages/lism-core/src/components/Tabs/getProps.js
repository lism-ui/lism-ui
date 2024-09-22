import atts from '../../lib/helper/atts';
// import getMaybeCssVar from '../../lib/getMaybeCssVar';

export default function getTabsProps({
	lismClass,
	variant = 'default',
	isHorizontal,
	keepHeight,
	listProps = {},
	panelProps = {},
	// tabPadding,
	isFlow,
	style = {},
	...props
}) {
	let _listProps = {};
	let _panelProps = {};

	// if (null != tabPadding) {
	// 	style['--tab-p'] = getMaybeCssVar(tabPadding, 'space', 'p');
	// }

	const defaultProps = {
		lismClass: atts(lismClass, 'c--tabs', variant && `c--tabs--${variant}`),
		style,
	};

	if (isFlow) {
		_panelProps.isFlow = isFlow;
	}

	if (isHorizontal) {
		defaultProps.gd = [null, 'var(--gd--hz)'];
		_listProps.fxd = [null, 'column'];
	}

	if (keepHeight) {
		props['data-tabs-height'] = 'keep';
	}

	return {
		tabsProps: Object.assign(defaultProps, props),
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
		// fz: 's',
		// lh: 'xs',
		lismState: ['is--reset'],
		role: 'tab',
		'aria-selected': isActive ? 'true' : 'false',
	};
	return Object.assign(defaultProps, props);
}
