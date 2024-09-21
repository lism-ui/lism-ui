import atts from '../../lib/helper/atts';
export default function getBannarProps({ lismClass, variant, ...props }) {
	props.lismClass = atts(lismClass, 'b--banner', variant && `b--banner--${variant}`);
	return props;
}
