import React from 'react';
import setEvent from './setEvent';
import getLismProps from '../../lib/getLismProps';
import { getAccProps } from './getProps';
// import { AccContext } from './context';

// duration: [s]
export default function Accordion({ children, ...props }) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (!ref.current) return;
		return setEvent(ref.current);
	}, []);

	const lismProps = getLismProps(getAccProps(props));

	return (
		<details ref={ref} {...lismProps}>
			{/* <AccContext.Provider value={deliverState}>{children}</AccContext.Provider> */}
			{children}
		</details>
	);
}
