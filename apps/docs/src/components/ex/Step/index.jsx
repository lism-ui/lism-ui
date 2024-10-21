import { Lism, Flex, Stack } from '@lism-ui/core';

export function Step(props) {
	return <Stack lismClass='c--step' g='20' {...props} />;
}

export function StepBody(props) {
	return <Lism isFlow='s' pis='10' {...props} />;
}

export function StepHead({ tag = 'div', num = '1', label = 'Step.', children, ...props }) {
	return (
		<Flex lismClass='c--stepHead' g='20' ai='c' {...props}>
			<Lism d='if' lh='xs' px='20' ai='c' bd bdrs='99'>
				{label && (
					<Lism tag='span' fz='xs' fs='i'>
						{label}
					</Lism>
				)}
				<Lism tag='span' fz='xl' px='2px' fs='i'>
					{num}
				</Lism>
			</Lism>
			<Lism tag={tag} f='inherit' fz='l' fw='bold'>
				{children}
			</Lism>
		</Flex>
	);
}
