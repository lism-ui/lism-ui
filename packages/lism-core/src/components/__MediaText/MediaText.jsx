import { Lism } from '../Lism';

export default function MediaText({ lismClass = {}, variant, ...props }) {
	lismClass.c = 'c--mediaText';
	if (variant) lismClass.c += ` c--mediaText--${variant}`;
	return <Lism lismClass={lismClass} {...props} />;
}
