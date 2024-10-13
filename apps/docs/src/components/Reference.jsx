import { Callout } from '@lism-ui/core';

import {
	// Book as Book,
	Notebook as Book,
	// BookOpenText as Book,
	// BookBookmark as Book,
} from '@phosphor-icons/react';

export default function Reference({ children }) {
	return (
		<Callout icon={Book} keycolor='purple' bdrs='s'>
			{children}
		</Callout>
	);
}
