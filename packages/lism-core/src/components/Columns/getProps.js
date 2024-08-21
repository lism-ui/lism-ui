export default function getColumnsProps({ style = {}, ...props }) {
	props.style = style;
	return props;
}
