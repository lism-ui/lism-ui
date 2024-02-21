import setEvent from './setEvent.js';

document.addEventListener('DOMContentLoaded', function () {
	const tabsAll = document.querySelectorAll('.c--tabs');
	tabsAll.forEach((tabs) => {
		setEvent(tabs);
	});
});
