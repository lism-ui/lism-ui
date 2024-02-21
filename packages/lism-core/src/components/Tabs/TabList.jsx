import { Flex } from '../Flex';

export default function TabList({ lismClass = {}, variant, ...props }) {
	lismClass.c = 'c--tabs_list';
	if (variant) {
		lismClass.c += ` c--tabs_list--${variant}`;
	}

	return <Flex lismClass={lismClass} jc='s' role='tablist' {...props} />;
}
