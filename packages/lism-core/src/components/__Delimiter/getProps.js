import atts from '../../lib/helper/atts';

export default function ({ lismClass, variant, ...props }) {
	const defaultProps = {
		lismClass: atts(lismClass, `a--delimiter`, variant && `a--delimiter--${variant}`),
		skipState: true,
		tag: 'span',
	};

	// aria-hidden='true'、デフォルトでつける？
	return Object.assign(defaultProps, props);
}
