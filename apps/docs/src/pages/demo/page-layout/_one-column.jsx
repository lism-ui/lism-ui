// import { Link } from 'react-router-dom';
import { Container, Lism } from '@lism-ui/core';
export default function OneColumn({ title = '', children }) {
	return (
		<Lism tag='main' className='a--main' py={50}>
			<Lism tag='article' className='a--article' py={50}>
				<Container tag='header' className='a--article__header' size='m' hasGutter>
					<h1>{title || 'page title...'} </h1>
				</Container>

				<Container className='a--article__content' size='m' hasGutter isFlow mbs={50}>
					{children}
				</Container>
			</Lism>
		</Lism>
	);
}
