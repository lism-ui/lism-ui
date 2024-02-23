import { Alert } from '@lism-ui/core';

import {
	// Book,
	// Books,
	// Notebook,
	BookOpenText,
	//BookBookmark
} from '@phosphor-icons/react';

export default function Reference({ children }) {
	return (
		<Alert icon={BookOpenText} boxcolor='purple'>
			{children}
		</Alert>
	);
}
