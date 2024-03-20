import separateLinkProps from '../separateLinkProps';

export function getNavMenuProps({ _lismClass = [], linkComponent, ...props }) {
	_lismClass.push('c--navMenu__item');
	const liProps = { skipState: true, _lismClass, tag: 'li', ...props };

	if (props.href) {
		const { linkProps, otherProps } = separateLinkProps(props);
		linkProps.as = linkComponent;

		return {
			liProps: { ...liProps, ...otherProps },
			linkProps,
		};
	}
	return {
		liProps: { ...liProps, ...props },
		linkProps: null,
	};
}

export function getNavMenuLinkProps(props) {
	const navLinkProps = {
		skipState: true,
		_lismClass: ['c--navMenu__link'],
		tag: 'span',
		ai: 'center',
		consume: 'p gap',
	};

	const { linkProps, otherProps } = separateLinkProps(props);
	if (linkProps?.href) {
		navLinkProps.tag = 'a';
		Object.assign(navLinkProps, linkProps);
	}

	return { ...navLinkProps, ...otherProps };
}

export function getNavMenuAccProps({ _lismClass = [], linkComponent, ...props }) {
	_lismClass.push('c--navMenu__item');
	const liProps = { skipState: true, _lismClass, tag: 'li', ...props };

	if (props.href) {
		const { linkProps, otherProps } = separateLinkProps(props);
		linkProps.as = linkComponent;

		return {
			liProps: { ...liProps, ...otherProps },
			linkProps,
		};
	}
	return {
		liProps: { ...liProps, ...props },
		linkProps: null,
	};
}
export const getNavMenuAccHeadProps = ({ icon, ...props }) => {
	const { linkProps, otherProps } = separateLinkProps(props);
	const iconProps = {
		icon,
	};
	if (linkProps?.href) {
		iconProps.isTrigger = true;
	}

	return { linkProps, iconProps, otherProps };
};
