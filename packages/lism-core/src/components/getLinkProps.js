import getLismProps from '../lib/getLismProps';
import separateLinkProps from './separateLinkProps';

export default function getLinkProps({ isHiddenLink, isOverlayLink, lismState = [], ...props }) {
	const { linkProps, otherProps } = separateLinkProps(props);

	if (isHiddenLink) {
		lismState.push('is--hiddenLink');
	}
	if (isOverlayLink) {
		lismState.push('is--overlayLink');
	}

	otherProps.lismState = lismState;

	return { ...linkProps, ...getLismProps(otherProps, { hover: 'fade' }) };
}
