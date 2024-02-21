export default function getLismClass(prefix, moduleName, modifier) {
	let className = `${prefix}--${moduleName}`;
	if (modifier) {
		className += ` ${prefix}--${moduleName}--${modifier}`;
	}
	return className;
}
