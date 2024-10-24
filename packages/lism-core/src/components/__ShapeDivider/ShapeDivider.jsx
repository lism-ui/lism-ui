import { Lism } from '../Lism';
import ShapeSVG from './ShapeSVG';
import { getShapeDividerProps } from './getProps';

export default function ShapeDivider(props) {
	const { shape, props: dividerProps } = getShapeDividerProps(props);
	if (props.level === 0) return null;

	return (
		<Lism isFullwide {...dividerProps}>
			<Lism skipState lismClass='b--shapeDivider__inner'>
				<ShapeSVG className='b--shapeDivider__svg' shape={shape} />
			</Lism>
		</Lism>
	);
}
