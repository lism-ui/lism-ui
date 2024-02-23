export default function separateLinkProps(props) {
	let { href, target, openNewTab, rel, ...otherProps } = props;
	target = target || openNewTab ? '_blank' : null;
	if (target === '_blank' && !rel) rel = 'noopener noreferrer';

	const linkProps = { href, target, rel };
	return { linkProps, otherProps };
}
