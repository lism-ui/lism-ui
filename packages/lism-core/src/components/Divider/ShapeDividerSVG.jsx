import SVGs from './svg';

const svgResetProps = {
	id: null,
	xmlSpace: null,
	'aria-hidden': 'true',
	focusable: 'false',
	preserveAspectRatio: 'none',
	style: {},
};
export default function ShapeDividerSVG({ className, shape }) {
	const SVG = SVGs[shape] || null;
	// svg取得できなければ
	if (!SVG) return null;

	// ちらつきを抑えるためにclampでの最小値を設定
	return (
		<SVG
			{...svgResetProps}
			className={className}
			width='100%'
			height='100%'
			//height={`${level * 6}px`}
		/>
	);
}
