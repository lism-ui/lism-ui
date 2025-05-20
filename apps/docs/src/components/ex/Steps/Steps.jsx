import { Lism, Stack } from '@lism-ui/core';

export function Root(props) {
	return <Stack lismClass='c--step' g='40' {...props} />;
}
export function Item(props) {
	return <Stack lismClass='c--step__item' g='20' {...props} />;
}
export function Head({ tag = 'div', num = '1', label = 'Step.', children, ...props }) {
	return (
		<Stack g='20' ai='c' fxd={[null, 'row']} {...props}>
			<Lism d='if' lh='xs' px='20' py='5' ai='e' ff='mono' fs='i' bd bdrs='99'>
				<span className='-fz:2xs'>{label}</span>
				<span className='-fz:l -lh:1'>{num}</span>
			</Lism>
			<Lism tag={tag} f='inherit' fz='l' fw='bold'>
				{children}
			</Lism>
		</Stack>
	);
}
export function Body(props) {
	return <Lism isFlow='s' pis='5' {...props} />;
}
