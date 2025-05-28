import { Box, Dummy } from '@lism-ui/core';
import Accordion from '@lism-ui/core/next-js/Accordion';
import '@lism-ui/core/css/all.css';

export default function Home() {
	return (
		<Box isFlow>
			<Box p={40} bgc='base-2' h='20vh'>
				This is Box
			</Box>
			<Accordion.Root p='20'>
				<Accordion.Header>
					<Accordion.Label>Accordion.Label</Accordion.Label>
					<Accordion.Icon />
				</Accordion.Header>
				<Accordion.Body mbs='20'>
					<Dummy length='l' />
				</Accordion.Body>
			</Accordion.Root>
		</Box>
	);
}
