import getLismProps from '../../lib/getLismProps';
import separateLinkProps from '../separateLinkProps';

export default function Link({ as, exProps = {}, ...props }) {
	const { linkProps, otherProps } = separateLinkProps(props);
	const lismProps = getLismProps(otherProps, { hover: 'fade' });

	const JSX = as || 'a';
	return <JSX {...linkProps} {...lismProps} {...exProps} />;
}
