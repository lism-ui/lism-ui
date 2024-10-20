import atts from '../../lib/helper/atts';

export function getDividerProps({ lismClass, variant, ...props }) {
	const defaultProps = {
		lismClass: atts(lismClass, `a--divider`, variant && `a--divider--${variant}`),
		bd: 'bs',
	};
	return { ...defaultProps, ...props };
}
