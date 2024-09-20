import atts from '../../lib/helper/atts';
export default function getBoxProps({ lismClass, variant = '', ...props }) {
	props.lismClass = atts(lismClass, 'l--box', variant && `l--box--${variant}`);

	return props;
}
