import {
	Box,
	Decorator,
	Lism,
	// DecoBox,
} from '@loos/lism-core';
import PRESETS from './presets';

export default function DecoBox({
	lismClass = {},
	variant = '',
	subvariant = '',
	children,
	data = {},
	isFlow,
	// sub_data = {},
	// decoratorCount,
	// decoratorProps = {},
	// bodyProps = {},
	...props
}) {
	lismClass.c = 'c--decoBox';
	// lismState.push(`d--${variant}`);

	if (variant) {
		lismClass.c += ` c--decoBox--${variant}`;
	}
	// if (subvariant) {
	// 	lismClass.c += ` deco--${variant}--${subvariant}`;
	// }

	// 'c--decoBox'
	const DATA = Object.assign({}, PRESETS[variant] || {});
	const SUB_DATA = DATA[subvariant] || {};

	const boxProps = Object.assign({}, DATA?.boxProps, SUB_DATA?.boxProps, data.boxProps || {});
	const bodyProps = Object.assign({}, DATA?.bodyProps, SUB_DATA?.bodyProps, data.bodyProps || {});

	// デコレーターの数
	const decoratorCount = DATA?.decoratorCount || 0;

	let decorator = null;
	if (decoratorCount) {
		if (1 === decoratorCount) {
			const decoratorProps = Object.assign(
				{},
				DATA.decoratorProps,
				SUB_DATA.decoratorProps,
				data.decoratorProps || {}
			);

			decorator = <Decorator {...decoratorProps} />;
		} else if (1 < decoratorCount) {
			decorator = Array.from({ length: decoratorCount }).map((_, i) => {
				const decoratorProps = Object.assign(
					{},
					DATA.decoratorProps,
					SUB_DATA.decoratorProps?.[`i${i + 1}`],
					data.decoratorProps || {}
				);
				return <Decorator key={i} index={i + 1} {...decoratorProps} />;
			});
		}
	}

	if (isFlow) {
		bodyProps.isFlow = isFlow;
	}

	let boxCntent = null;
	if (bodyProps) {
		boxCntent = <Box {...bodyProps}>{children}</Box>;
	} else {
		boxCntent = children;
	}

	if (subvariant) {
		boxProps[`data-${variant}`] = subvariant;
	}

	return (
		<Lism lismClass={lismClass} {...boxProps} {...props}>
			{boxCntent}
			{decorator}
		</Lism>
	);
}
