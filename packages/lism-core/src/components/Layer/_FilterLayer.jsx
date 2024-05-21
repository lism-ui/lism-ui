import Layer from './Layer';
import { getFilterLayerProps } from './getProps';

export default function FilterLayer(props) {
	return <Layer variant='filter' {...getFilterLayerProps(props)} />;
}
