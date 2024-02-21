import { Grid } from '../Grid';
import { FlexItem } from '../Flex';

export default function HeroContent({ type, ...props }) {
	let defProps = {};
	if (type === 'top') {
		defProps.mb = 'auto';
	} else if (type === 'bottom') {
		defProps.mt = 'auto';
	} else if (type === 'center') {
		defProps = {
			my: 'auto',
			// py: 50,
			isContainer: 'm',
			hasGutter: true,
			// isFlow: true,
		};
		defProps.my = 'auto';
	} else if (type === 'stretch') {
		// defProps.as = Grid;
		defProps = {
			as: Grid,
			fxg: '1',
			ai: 'center',
			// ac: 'stretch',
		};
	}

	return <FlexItem className='c--hero__content' data-pos={type} {...defProps} {...props} />;
}
