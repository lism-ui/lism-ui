import atts from '../../lib/helper/atts';

export function getDividerProps({ lismClass, variant, ...props }) {
	const defaultProps = {
		lismClass: atts(lismClass, `a--divider`, variant && `a--divider--${variant}`),
		bd: 'bs',
		'aria-hidden': 'true',
	};
	return { ...defaultProps, ...props };
}
