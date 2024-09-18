export function getDialogProps({ _lismClass = [], variant, style = {}, duration, ...props }) {
	_lismClass.push('d--dialog');
	if (variant) _lismClass.push(`d--dialog--${variant}`);
	props._lismClass = _lismClass;

	if (duration) {
		style['--duration'] = duration;
	}

	props.style = style;

	return props;
}
