import { Flex } from '../Flex';

export default function TabList({ lismClass = {}, variant, ...props }) {
	lismClass.c = 'c--tabs__list';
	if (variant) lismClass.c += ` c--tabs__list--${variant}`;

	return <Flex lismClass={lismClass} jc='s' role='tablist' {...props} />;
}
