import { Box, Flex, Container } from '@lism-ui/core';

function App() {
	return (
		<Container size='m' hasGutter isFlow>
			<Flex gap='20'>
				<img src='vite.svg' />
				<h1>Vite + Lism UI</h1>
			</Flex>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat itaque et
				voluptatum, ducimus temporibus accusamus exercitationem dolores id impedit corporis
				asperiores debitis soluta, nemo iusto optio quae. Ducimus, aperiam tempora!
			</p>
			<Box bgc='base-2' p='40'>
				Box test
			</Box>
		</Container>
	);
}

export default App;
