import React from 'react';
// import { useEffect, useRef } from 'react';
import { Lism } from '../Lism';
import { setEvent } from './setDialog';
// import getLismProps from '../../lib/getLismProps';

// duration: [s]
const Dialog = ({ children, variant, ...props }) => {
	const ref = React.useRef(null);
	React.useEffect(() => {
		if (!ref?.current) return;
		return setEvent(ref?.current);
	}, [ref]);

	let lismClass = 'd--modal';
	if (variant) lismClass += ` d--modal--${variant}`;

	lismClass += ' is--reset';

	return (
		<Lism forwardedRef={ref} tag='dialog' lismClass={lismClass} p='40' ac='c' {...props}>
			{children}
		</Lism>
	);
};
// Dialog.displayName = 'Dialog';
export default Dialog;
