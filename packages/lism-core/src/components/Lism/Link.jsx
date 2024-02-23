import getLismProps from '../../lib/getLismProps';
import separateLinkProps from '../separateLinkProps';

export default function Link({ as, passProps = {}, ...props }) {
	const { linkProps, otherProps } = separateLinkProps(props);
	const lismProps = getLismProps(otherProps, { hover: 'fade' });

	const JSX = as || 'a';
	return <JSX {...linkProps} {...lismProps} {...passProps} />;
}
