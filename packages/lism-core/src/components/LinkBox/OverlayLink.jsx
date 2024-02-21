// import { useRef } from 'react';
import { Lism } from '../Lism';

export default function LinkBox({
	lismClass = {},
	// lismState = [],
	href,
	target,
	openNewTab,
	rel,
	// ariaLabel,
	// hover = 'fade',
	children,
	...props
}) {
	// lismState.push('is--linkBox');
	lismClass.e = 'e--overlayLink';

	let linkProps = {
		href,
		rel,
		target: target || openNewTab ? '_blank' : null,
		// 'aria-label': ariaLabel || null,
	};

	return (
		<Lism skipState tag='a' lismClass={lismClass} {...linkProps} {...props}>
			{/* {tag !== 'a' && href && <a className='e--hiddenLink is--skipFlow' {...linkProps} />} */}
			{children}
		</Lism>
	);
}
