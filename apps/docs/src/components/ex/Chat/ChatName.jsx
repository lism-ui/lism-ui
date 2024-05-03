// import React from 'react';
import { Lism } from '../Lism';
import { getNameProps } from './getProps';
export default function ChatName({ children, ...props }) {
	// {/* aria-label : "name の発言" ? */}
	return (
		<Lism skipState _lismClass={['c--chat__name']} {...getNameProps(props)}>
			{children}
		</Lism>
	);
}
