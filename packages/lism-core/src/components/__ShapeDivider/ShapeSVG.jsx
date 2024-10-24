import SVGs from './svg';
import { svgDefaultProps } from './getProps';

export default function ShapeDividerSVG({ className, shape }) {
	const SVG = SVGs[shape] || null;
	if (!SVG) return null;

	return (
		<SVG
			className={className}
			{...svgDefaultProps}
			// ちらつきを抑えるためにclampでの最小値を設定
			//height={`${level * 6}px`}
		/>
	);
}
