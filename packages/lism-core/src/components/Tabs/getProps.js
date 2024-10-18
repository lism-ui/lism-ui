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

	props.listProps = Object.assign(listProps, props.listProps);
	return {
		tabsProps: Object.assign(defaultProps, props),
		listProps: Object.assign(_listProps, listProps),
		panelProps: Object.assign(_panelProps, panelProps),
	};
}

export function getTabListProps(props) {
	const defaultProps = {
		lismClass: 'c--tabs__list',
		jc: 's',
		fz: 's',
		role: 'tablist',
	};
	return Object.assign(defaultProps, props);
}

export function getTabPanelProps(props, isActive) {
	const defaultProps = {
		lismClass: 'c--tabs__panel',
		role: 'tabpanel',
		'aria-hidden': isActive ? 'false' : 'true',
	};
	return Object.assign(defaultProps, props);
}
export function getTabProps(props, isActive) {
	const defaultProps = {
		skipState: true,
		lismClass: 'c--tabs__tab',
		lismState: ['reset--style'],
		tag: 'button',
		role: 'tab',
		'aria-selected': isActive ? 'true' : 'false',
	};
	return Object.assign(defaultProps, props);
}
