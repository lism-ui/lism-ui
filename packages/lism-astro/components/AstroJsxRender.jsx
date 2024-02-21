import React from 'react';
// import { render } from 'react-dom';

// export interface Props {
// 	src: any;
// }

export default function AstroJsxRender({ src = '' }) {
	// console.log('AstroJsxRender', src);

	// スカラー値をそのまま返す
	if (typeof src === 'string' || typeof src === 'number') {
		return src;
	}

	if (Array.isArray(src)) {
		return src.map((child, index) => {
			return <AstroJsxRender key={index} src={child} />;
		});
	}

	if (React.isValidElement(src)) {
		// console.log('React.isValidElement OK!', src);
		return <>{src}</>;
	}

	// 'astro:jsx': true,
	const isAstroJsx = typeof src === 'object' && src['astro:jsx'];

	// astro:jsx でもない場合は、ここで無効なデータとして扱う
	if (!isAstroJsx) return '"Unknown type:';

	// type と props を取得
	const { type: Type = 'span', props = {} } = src;

	const { children, ...otherProps } = props;

	// otherProps の class, style を変換する？
	// memo: styleが文字列形式だと普通にアウト
	// memp: class でもクラッシュはしない. 念のためclassName化する...？

	// type で判定していく
	if (typeof Type === 'string') {
		return (
			<Type {...otherProps}>
				<AstroJsxRender src={children} />
			</Type>
		);
	}

	// Fragment <> は Symbol 型
	if (typeof Type === 'symbol') {
		return <AstroJsxRender src={children} />;
	}

	if (typeof Type === 'function') {
		return (
			<Type {...otherProps}>
				<AstroJsxRender src={children} />
			</Type>
		);
	}

	return ':Invalid data:';
}
