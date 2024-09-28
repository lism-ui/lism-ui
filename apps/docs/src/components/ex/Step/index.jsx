import { Lism, Flex, Stack, Badge } from '@lism-ui/core';

export function Step(props) {
	return <Stack className='c--step' g='20' p='30' bdrs='m' bxsh='3' {...props} />;
}

export function StepBody(props) {
	return <Lism isFlow='s' {...props} />;
}

export function StepHead({ tag = 'div', num = '1', label = '', children, ...props }) {
	return (
		<Flex className='c--stepHead' g='20' ai='c' {...props}>
			<Badge tag='div' variant='fill' lh='1' px='20' py='5' g='5' ai='c' bdrs='full'>
				{label && (
					<Lism tag='span' fz='xs' fs='i'>
						{label}
					</Lism>
				)}
				<Lism tag='span' fz='xl' ff='mono' fs='i'>
					{num}
				</Lism>
			</Badge>
			<Lism tag={tag} f='inherit' fw='bold'>
				{children}
			</Lism>
		</Flex>
	);
}
