import React from 'react';
import { Lism, Grid, Avatar, Decorator } from '@lism-ui/core';
// import ChatName from './ChatName';
// import ChatAvatar from './ChatAvatar';
// import ChatContent from './ChatContent';
// import ChatFooter from './ChatFooter';
// import { ChatContext } from './context';
import {
	getProps,
	getNameProps,
	getAvatarProps,
	getContentProps,
	getDecoProps,
	getFooterProps,
} from './getProps';

export function Chat({
	_lismClass = [],
	lismState = [],
	name,
	avatar,
	footer,
	variant = 'speak',
	direction = 'start',
	isFlow = 's',
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

export function ChatName({ children, ...props }) {
	return (
		<Lism skipState _lismClass={['c--chat__name']} {...getNameProps(props)}>
			{children}
		</Lism>
	);
}
export function ChatAvatar(props) {
	return <Avatar _lismClass={['c--chat__avatar']} {...getAvatarProps(props)} />;
}

export function ChatContent({
	direction = 'start',
	variant = 'speak',
	isFlow,
	contentProps = {},
	children,
	...props
}) {
	let decorator = null;
	if ('speak' === variant || 'think' === variant) {
		decorator = <Decorator {...getDecoProps(direction, variant)} />;
	}

	return (
		<Lism _lismClass={['c--chat__body']} {...props}>
			{decorator}
			<Lism
				_lismClass={['c--chat__content']}
				isFlow={isFlow}
				{...getContentProps(direction, variant, contentProps)}
			>
				{children}
			</Lism>
		</Lism>
	);
}

export function ChatFooter({ children, ...props }) {
	return (
		<Lism skipState _lismClass={['c--chat__footer']} {...getFooterProps(props)}>
			{children}
		</Lism>
	);
}
