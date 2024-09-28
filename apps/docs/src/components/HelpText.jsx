import { Text } from '@lism-ui/core';

export const HelpText = ({ children, ...props }) => {
	return (
		<Text tag='small' className='-lh:xs -d:b' mbs='5' {...props}>
			{children}
		</Text>
	);
};
