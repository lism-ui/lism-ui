import React from 'react';
import { Grid } from '../Grid';
import ChatName from './ChatName';
import ChatAvatar from './ChatAvatar';
import ChatContent from './ChatContent';
import ChatFooter from './ChatFooter';
// import { ChatContext } from './context';
import {
	getProps,
	// getNameProps, getAvatarProps, getFooterProps
} from './getProps';

export default function Chat({
	_lismClass = [],
	lismState = [],
	name,
	avatar,
	footer,
	variant = 'speak',
	direction = 'start',
	isFlow = 's',
	// nameProps = {},
	// avatarProps = {},
	// footerProps = {},
	bodyProps = {},
	contentProps = {},
	children,
	...props
}) {
	_lismClass.push(`c--chat c--chat--${direction}`);
	if (variant) _lismClass.push(`c--chat--${variant}`);

	// const contextData = { direction, variant };
	return (
		// <ChatContext.Provider value={contextData}>
		<Grid
			_lismClass={_lismClass}
			lismState={lismState}
			{...getProps(direction, variant)}
			{...props}
		>
			{name && <ChatName>{name}</ChatName>}
			{avatar && <ChatAvatar src={avatar} />}
			<ChatContent
				isFlow={isFlow}
				variant={variant}
				direction={direction}
				contentProps={contentProps}
				{...bodyProps}
			>
				{children}
			</ChatContent>
			{footer && <ChatFooter>{footer}</ChatFooter>}
		</Grid>
		// </ChatContext.Provider>
	);
}
