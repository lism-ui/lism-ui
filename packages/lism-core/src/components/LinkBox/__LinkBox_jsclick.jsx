import React from 'react';
import { Box } from '../Box';
// import { Lism } from '../Lism';
import setEvent from './__setEvent';
// import classnames from 'classnames';

/**
 * linkbox用のスクリプトどう読み込ませる？？
 */
// const setLinkboxScript = () => {
// 	const script = document.createElement("script");
// 	script.src = "./linkbox.js";
// 	script.async = true;

// 	document.body.appendChild(script);

// 	return () => {
// 		document.body.removeChild(script);
// 	};
// };

export default function LinkBox({
	as,
	tag = 'a',
	href,
	target,
	openNewTab,
	rel,
	ariaLabel,
	hover,
	children,
	...props
}) {
	const ref = React.useRef(null);

	React.useEffect(() => {
		if (tag === 'a') return;
		if (!ref.current) return;
		return setEvent(ref.current);
	}, [tag]);

	const blockProps = {
		forwardedRef: ref,
		isLinkbox: true,
		'aria-label': ariaLabel || null,
		hover: hover || 'fade',
		...props,
	};

	const linkProps = {
		href,
		rel,
		target: target || openNewTab ? '_blank' : null,
	};

	const Component = as || Box;
	// aタグ以外をリンク化する場合
	if (tag !== 'a') {
		return (
			<Component tag={tag} data-linkbox='div' tabIndex='0' role='link' {...blockProps}>
				{children}
				<a {...linkProps} data-linkbox='a' aria-hidden='true'>
					{ariaLabel || ''}
				</a>
			</Component>
		);
	}

	// 普通にaタグで囲む
	return (
		<Component tag='a' data-linkbox='a' {...blockProps} {...linkProps}>
			{children}
		</Component>
	);
}
