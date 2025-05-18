import atts from '../../lib/helper/atts';

export function getDividerProps({ lismClass, ...props }) {
	const defaultProps = {
		lismClass: atts(lismClass, `a--divider`),
		bd: 'bs',
		'aria-hidden': 'true',
	};
	return { ...defaultProps, ...props };
}
