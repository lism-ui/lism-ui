import { isValidElement } from 'react';
import { MediaLayer, FilterLayer } from './index';

export const getFilterLayer = (filter) => {
	return undefined !== filter ? <FilterLayer {...filter} /> : null;
};

export const getMediaLayer = (media, z) => {
	if (undefined !== media) {
		if (media?.src) {
			return <MediaLayer z={z} {...media} />;
		} else if (isValidElement(media)) {
			return <MediaLayer z={z}>{media}</MediaLayer>;
		}
	}
	return null;
};
