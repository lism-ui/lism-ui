import { Lism } from '../Lism';
import ShapeSVG from './ShapeSVG';
import { getShapeDividerProps } from './getProps';

export default function ShapeDivider(props) {
	const { shape, ...attrs } = getShapeDividerProps(props);
	if (props.level === 0) return null;

	return (
		<Lism skipState data-shape={shape} {...attrs}>
			<Lism skipState className='b--shapeDivider__inner -h:100'>
				<ShapeSVG className='b--shapeDivider__svg -d:b' shape={shape} />
			</Lism>
		</Lism>
	);
}
