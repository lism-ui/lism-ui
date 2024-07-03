import { Callout } from '@lism-ui/core';

import {
	// Book,
	// Books,
	// Notebook,
	BookOpenText,
	//BookBookmark
} from '@phosphor-icons/react';

export default function Reference({ children }) {
	return (
		<Callout icon={BookOpenText} boxcolor='purple'>
			{children}
		</Callout>
	);
}
