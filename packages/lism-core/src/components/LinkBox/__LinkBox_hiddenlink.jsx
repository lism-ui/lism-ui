// import { useRef } from 'react';
import { Lism } from '../Lism';

export default function LinkBox({
	lismClass = {},
	// lismState = [],
	as,
	tag = 'a',
	href,
	target,
	openNewTab,
	rel,
	ariaLabel,
	hover = 'fade',
	children,
	...props
}) {
	// lismState.push('is--linkBox');
	lismClass.c = 'c--linkBox';

	// const ref = useRef(null);

	const linkProps = {
		href,
		rel,
		target: target || openNewTab ? '_blank' : null,
		'aria-label': ariaLabel || null,
	};

	const Component = as || Lism;

	// aタグ以外をリンク化する場合、 stretchedLink でリンクを仕込む
	if (tag !== 'a') {
		return (
			<Component tag={tag} lismClass={lismClass} hover={hover} {...props}>
				<a className='e--stretchedLink is--skipFlow' {...linkProps}></a>
				{children}
			</Component>
		);
	}

	// 普通にaタグで囲む場合
	return (
		<Component tag='a' lismClass={lismClass} hover={hover} {...props} {...linkProps}>
			{children}
		</Component>
	);
}
