import { Lism } from '../Lism';
import { Flex } from '../Flex';
import { Icon } from '../Icon';
import getProps from './getProps';

export default function Note({ isFlow, heading, children, ...props }) {
	props = getProps(props);
	const { icon, iconProps = {}, headProps = {}, bodyProps = {}, ...noteProps } = props;

	if ('Flex' === headProps.as) {
		headProps.as = Flex;
	}

	return (
		<Lism {...noteProps}>
			{heading && (
				<Lism skipState _lismClass={['c--note__head']} fw='bold' {...headProps}>
					{icon && <Icon _lismClass={['c--note__icon']} icon={icon} {...iconProps} />}
					<span className='c--note__heading'>{heading}</span>
				</Lism>
			)}
			<Lism _lismClass={['c--note__body']} isFlow={isFlow} {...bodyProps}>
				{children}
			</Lism>
		</Lism>
	);
}
