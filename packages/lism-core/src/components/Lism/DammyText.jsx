import Text from './Text';
import TEXTS from './texts';

export default function DammyText({ length = 'm', lang = 'en', ...props }) {
	return <Text {...props} dangerouslySetInnerHTML={{ __html: TEXTS[lang][length] || '' }} />;
}
