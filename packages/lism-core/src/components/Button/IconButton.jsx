import { Grid } from '../Grid';
import { Icon } from '../Icon';
import { getIconButtonProps } from './getProps';

export default function Button({ icon, children, ...props }) {
	return <Grid {...getIconButtonProps(props)}>{children || <Icon icon={icon} />}</Grid>;
}
