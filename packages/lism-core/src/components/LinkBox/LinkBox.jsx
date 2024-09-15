import { Lism } from '../Lism';
import separateLinkProps from '../separateLinkProps';

export default function LinkBox({
	layout,

	setHiddenLink = false,
	linkLabel = '',
	children,
	...props
}) {
	// lismState.push('is--linkBox');

	const hasHref = !!props.href;
	const { linkProps, otherProps } = separateLinkProps(props);

	const defaultTag = hasHref ? 'a' : 'div';

	const LismComponent = layout || Lism;

	// hiddenLink でリンクを仕込むことも可能
	if (setHiddenLink) {
		return (
			<LismComponent isLinkBox hov='fade' tag='div' {...otherProps}>
				<a
					className='is--hiddenLink is--skipFlow'
					aria-label={linkLabel}
					{...linkProps}
				></a>
				{children}
			</LismComponent>
		);
	}

	return (
		<LismComponent isLinkBox hov='fade' tag={defaultTag} {...linkProps} {...otherProps}>
			{children}
		</LismComponent>
	);
}
