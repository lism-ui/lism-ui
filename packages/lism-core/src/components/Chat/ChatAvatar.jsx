// import React from 'react';

import { Avatar } from '../Avatar';
import { getAvatarProps } from './getProps';

export default function ChatAvatar(props) {
	return <Avatar _lismClass={['c--chat__avatar']} {...getAvatarProps(props)} />;
}
