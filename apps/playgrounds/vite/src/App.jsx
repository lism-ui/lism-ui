import { Box, Flex, Container, Button, DammyText, Divider, Columns } from '@lism-ui/core';
import LocalTest from './LocalTest';

function App() {
	return (
		<Container size='m' hasGutter isFlow>
			<Flex gap='20' py='20'>
				<img src='vite.svg' />
				<h1>Vite + Lism UI</h1>
			</Flex>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat itaque et
				voluptatum, ducimus temporibus accusamus exercitationem dolores id impedit corporis
				asperiores debitis soluta, nemo iusto optio quae. Ducimus, aperiam tempora!
			</p>
			<Columns cols='2' gap='40'>
				<Box bgc='base-2' p='40' bxsh='2'>
					Box
				</Box>
				<Box bgc='base-2' p='40' bxsh='2'>
					Box
				</Box>
			</Columns>

			<DammyText length='l' />
			<Flex jc='c'>
				<Button href='###'>Button</Button>
			</Flex>
			<Divider />
			<LocalTest />
		</Container>
	);
}

export default App;
