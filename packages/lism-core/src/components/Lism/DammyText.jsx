import Text from './Text';
import TEXTS from './texts';

export default function DammyText({ length = 's', lang = 'en', ...props }) {
	return <Text {...props} dangerouslySetInnerHTML={{ __html: TEXTS[lang][length] || '' }} />;
}
