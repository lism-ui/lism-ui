import atts from '../../lib/helper/atts';
export default function getBoxProps({ lismClass, variant = '', ...props }) {
	props.lismClass = atts(lismClass, 'l--frame', variant && `l--frame--${variant}`);

	return props;
}
