export const dividerLabelProps = {
	className: 'c--divider__label',
	// fz: 's',
	// lh: '1',
	// c: 'content-3',
};

export function getDividerProps({ _lismClass = [], variant, isVertical, label, ...props }) {
	_lismClass.push('c--divider');
	if (variant) _lismClass.push(`c--divider--${variant}`);

	const theProps = {
		_lismClass,
		_flex: isVertical ? 'stack' : 'flex',
		ai: 'c', // pricemenu など flexの直下で stretchになっても中央に来るように、デフォルトで付ける
	};
	if (label) {
		// <Divider> に対する指定でそれぞれ上書きできるように、<Divider>側でフォントサイズなども指定している
		Object.assign(theProps, {
			gap: 'em6',
			fz: 's',
			lh: '1',
			c: 'content-3',
		});
	}

	return {
		dividerProps: Object.assign(theProps, props),
		labelProps: { className: 'c--divider__label' },
		bdProps: { className: 'c--divider__bd', bd: isVertical ? 'l' : 't' },
	};
}

export const dividerDecoProps = {
	className: 'c--divider__bd',
	// fx: '1',
	// d: 'block',
	// tag: 'span',
};
