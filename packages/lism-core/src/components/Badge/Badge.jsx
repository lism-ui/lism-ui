import { Lism } from '../Lism';
import { Icon } from '../Icon';
import getProps from './getProps';

export default function Badge({ icon, children, ...props }) {
	return (
		<Lism {...getProps(props)}>
			{icon && <Icon icon={icon} />}
			{children}
		</Lism>
	);
}
