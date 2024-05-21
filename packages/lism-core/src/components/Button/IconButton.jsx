import { Grid } from '../Grid';
import { Icon } from '../Icon';
import { getIconButtonProps } from './getProps';

export default function Button({ icon, children, ...props }) {
	// children でアイコン配置する場合 → .e--icon 必須
	return <Grid {...getIconButtonProps(props)}>{children || <Icon icon={icon} />}</Grid>;
}
