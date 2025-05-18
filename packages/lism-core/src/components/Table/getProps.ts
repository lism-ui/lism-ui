import atts from '../../lib/helper/atts';
import getMaybeCssVar from '../../lib/getMaybeCssVar';

export default function getBoxProps({
	lismClass,
	thBgc,
	tdBgc,
	thC,
	tdC,
	bdwX,
	bdwY,
	style = {},
	...props
}) {
	props.lismClass = atts(lismClass, 'l--table');

	if (bdwX) style['--bdwX'] = bdwX;
	if (bdwY) style['--bdwY'] = bdwY;
	if (thC) style['--th-c'] = getMaybeCssVar(thC, 'color');
	if (tdC) style['--td-c'] = getMaybeCssVar(tdC, 'color');
	if (thBgc) style['--th-bgc'] = getMaybeCssVar(thBgc, 'color');
	if (tdBgc) style['--td-bgc'] = getMaybeCssVar(tdBgc, 'color');

	props.style = style;

	return props;
}
