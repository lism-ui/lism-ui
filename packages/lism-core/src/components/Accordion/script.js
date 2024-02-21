import setEvent from './setEvent.js';

document.addEventListener('DOMContentLoaded', function () {
	const detailsAll = document.querySelectorAll('.c--accordion');
	detailsAll.forEach((details) => {
		setEvent(details);
	});
});
