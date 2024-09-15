import getLinkProps from '../getLinkProps';

export default function Link({ as, exProps = {}, ...props }) {
	const JSX = as || 'a';
	return <JSX {...getLinkProps(props)} {...exProps} />;
}
