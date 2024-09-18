// import React from 'react';
// import { useEffect, useRef } from 'react';
// import { Lism } from '../Lism';
// import { Stack } from '../Flex';
import { Center } from '../Center';
import { Icon } from '../Icon';
// import { setEvent } from './setDialog';
// import getLismProps from '../../lib/getLismProps';
// import { getAccProps } from './getProps';
// import { AccContext } from './context';

// duration: [s]
const DialogCloseBtn = ({
	children,
	icon = 'x',
	modalId = '',
	text = '',
	closeSrText = 'Close',
	...props
}) => {
	// const lismProps = getLismProps(getAccProps(props));

	return (
		<Center
			lismClass='d--modal__close is--reset'
			tag='button'
			data-modal-close={modalId}
			pos='a'
			t='0'
			r='0'
			z='1'
			fz='xl'
			p='20'
			m='20'
			bdrs='full'
			hov='bgc'
			{...props}
		>
			{children ? (
				children
			) : (
				<>
					<Icon icon={icon} />
					{text && <span>{text}</span>}
					<span className='a--srText'>{closeSrText}</span>
				</>
			)}
		</Center>
	);
};
export default DialogCloseBtn;
