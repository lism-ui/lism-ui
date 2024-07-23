import { Lism, Flex, Stack, Badge } from '@lism-ui/core';

export function Step(props) {
	return <Stack className='c--step' gap='em8' bdrs='m' bxsh='3' p='em12' {...props} />;
}

export function StepBody(props) {
	return <Lism isFlow='s' pis='em4' {...props} />;
}

export function StepHead({ tag = 'div', num = '1', label = '', children, ...props }) {
	return (
		<Flex className='c--stepHead' gap='em8' ai='c' {...props}>
			<Badge variant='fill' tag='div' lh='1' px='em6' py='em3' gap='em2' bdrs='full'>
				{label && (
					<Lism tag='span' fz='xs' fs='i'>
						{label}
					</Lism>
				)}
				<Lism tag='span' fz='2xl' ff='mono' fs='i'>
					{num}
				</Lism>
			</Badge>
			<Lism tag={tag} f='inherit' fw='bold'>
				{children}
			</Lism>
		</Flex>
	);
}
