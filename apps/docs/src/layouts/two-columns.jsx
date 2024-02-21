// import { Link } from 'react-router-dom';
import { Container, Box, SideFlex, FlexItem } from '@loos/lism-core';

const DefaultSidebar = () => {
	return (
		<>
			<p>Sidebar</p>
			<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
			<p>
				Deleniti cum nostrum nemo, accusantium eius est ut voluptatibus excepturi unde
				repudiandae ea dolore odio laborum corrupti, totam perspiciatis odit. Laboriosam,
				amet.
			</p>
		</>
	);
};
export default function TwoColumns({ sidebar, children }) {
	const Sidebar = sidebar || DefaultSidebar;
	return (
		<Container size='m' py={50}>
			<SideFlex hasGutter side='last' sideW='240px' fluidMinW='40em' gap={50}>
				<FlexItem isFlow bd='guide'>
					{children}
				</FlexItem>
				<FlexItem bd='guide' isFlow>
					<Sidebar />
				</FlexItem>
			</SideFlex>
		</Container>
	);
}
