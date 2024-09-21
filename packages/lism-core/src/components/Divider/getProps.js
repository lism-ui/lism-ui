import atts from '../../lib/helper/atts';

export function getDividerProps({ lismClass, variant, ...props }) {
	props.lismClass = atts(lismClass, `a--divider`, variant && `a--divider--${variant}`);
	return props;
}
