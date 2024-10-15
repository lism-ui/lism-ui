import getLismProps from '../lib/getLismProps';

export default function getLinkProps({ isHiddenLink, isOverlayLink, lismState = [], ...props }) {
	if (isHiddenLink) {
		lismState.push('is--hiddenLink');
	}
	if (isOverlayLink) {
		lismState.push('is--overlayLink');
	}
	props.lismState = lismState;
	return getLismProps(props);
}
