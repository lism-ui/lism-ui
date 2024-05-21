// import React from 'react';
import { Lism } from '../Lism';
import { getFooterProps } from './getProps';
export default function ChatFooter({ children, ...props }) {
	// {/* aria-label : "name の発言" ? */}
	return (
		<Lism skipState _lismClass={['c--chat__footer']} {...getFooterProps(props)}>
			{children}
		</Lism>
	);
}
