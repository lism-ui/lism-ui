// 'use client';
// import Image from "next/image";
// import Link from 'next/link';

// import Box from '@lism-ui/core/react/Box';
// import Flex from '@lism-ui/core/react/Flex';
// import Test from '@lism-ui/core/react/Test';

import {
	Box,
	Accordion,
	AccordionHeader,
	AccordionBody,
	Tabs,
	TabItem,
	DammyText,
} from '@lism-ui/next';
import '@lism-ui/core/css/all.css';

export default function Home() {
	return (
		<Box isFlow>
			<Box p={40} bgc='base-2' h='20vh'>
				This is Box
			</Box>
			<Tabs>
				<TabItem label='tab1'>
					<DammyText />
				</TabItem>
				<TabItem label='tab2'>
					<DammyText length='l' />
				</TabItem>
			</Tabs>
			<Accordion>
				<AccordionHeader>アコーディオンのタイトル</AccordionHeader>
				<AccordionBody>
					<DammyText />
				</AccordionBody>
			</Accordion>
		</Box>
	);
}
