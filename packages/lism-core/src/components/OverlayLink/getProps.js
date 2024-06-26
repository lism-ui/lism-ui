import separateLinkProps from '../separateLinkProps';

export default function getOverlayLinkProps({ _lismClass = [], ...props }) {
	const { linkProps, otherProps } = separateLinkProps(props);

	_lismClass.push('a--overlayLink');

	return Object.assign({ _lismClass, skipState: true, tag: 'a' }, linkProps, otherProps);
}
