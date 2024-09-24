import atts from '../../lib/helper/atts';
import separateLinkProps from '../separateLinkProps';
import getMaybeCssVar from '../../lib/getMaybeCssVar';
export function getNavMenuProps({
	lismClass,
	variant,
	nestLevel,
	hovC,
	hovBgc,
	// linkP,
	style = {},
	...props
}) {
	const theProps = {
		lismClass: atts(lismClass, 'c--navMenu', variant && `c--navMenu--${variant}`),
		tag: 'ul',
	};
	if (hovBgc) {
		style['--hov-bgc'] = getMaybeCssVar(hovBgc, 'color');
	}
	if (hovC) {
		style['--hov-c'] = getMaybeCssVar(hovC, 'color');
	}
	// if (linkP) {
	// 	style['--link-p'] = getMaybeCssVar(linkP, 'space', 'p');
	// }
	props.style = style;

	if (nestLevel) {
		theProps['data-nest-level'] = nestLevel;
	}

	return Object.assign(theProps, props);
}

export function getNavMenuItemProps(props) {
	const liProps = {
		skipState: true,
		lismClass: 'c--navMenu__item',
		tag: 'li',
	};

	// if (props.href) {
	// 	const { linkProps, otherProps } = separateLinkProps(props);

	// 	return {
	// 		liProps: Object.assign(liProps, props, otherProps),
	// 		linkProps,
	// 	};
	// }
	return Object.assign(liProps, props);
}

export function getNavMenuLinkProps(props) {
	const navLinkProps = {
		skipState: true,
		lismClass: 'c--navMenu__link',
		tag: 'span',
		// ai: 'center',
		c: 'inherit',
		hov: 'fade',
	};

	const { linkProps, otherProps } = separateLinkProps(props);
	if (linkProps?.href) {
		navLinkProps.tag = 'a';
		Object.assign(navLinkProps, linkProps);
	}

	return { ...navLinkProps, ...otherProps };
}
