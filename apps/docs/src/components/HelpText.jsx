import { Text } from '@loos/lism-core';

export const HelpText = ({ children, ...props }) => {
	return (
		<Text tag='small' className='-lh:xs -d:b' mbs='em3' {...props}>
			{children}
		</Text>
	);
};
