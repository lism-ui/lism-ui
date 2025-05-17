import atts from '../../lib/helper/atts';

export default function getBoxProps({ lismClass, variant = '', ...props }) {
	props.lismClass = atts(lismClass, 'b--list');
	if (variant) {
		// variant を , で分割し、それぞれに対して class を追加
		variant.split(',').forEach((v) => {
			props.lismClass += ` b--list--${v}`;
		});
	}
	return props;
}
