import { Lism, Stack, Flex } from '@lism-ui/core';
import getMaybeCssVar from '@lism-ui/core/lib/getMaybeCssVar';
import './style.scss';

export function Root({ children, hovC, hovBgc, style = {}, ...props }) {
	if (hovBgc) style['--hov-bgc'] = getMaybeCssVar(hovBgc, 'color');
	if (hovC) style['--hov-c'] = getMaybeCssVar(hovC, 'color');

	style['--link-td'] = 'none';

	return (
		<Stack lismClass='c--navMenu' tag='ul' style={style} {...props}>
			{children}
		</Stack>
	);
}

export function Nest({ children, pis = '30', ...props }) {
	return (
		<Stack lismClass='c--navMenu__nest' tag='ul' pis={pis} {...props}>
			{children}
		</Stack>
	);
}

export function Item({ children, ...props }) {
	return (
		<Lism lismClass='c--navMenu__item' tag='li' skipState {...props}>
			{children}
		</Lism>
	);
}
export function Link({ href, tag = 'span', hov, children, ...props }) {
	if (href) {
		tag = 'a';
		hov = hov || 'fade';
	}
	return (
		<Flex
			lismClass='c--navMenu__link'
			tag={tag}
			href={href}
			hov={hov}
			get='p'
			c='inherit'
			skipState
			{...props}
		>
			{children}
		</Flex>
	);
}
