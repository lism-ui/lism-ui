import setEvent from './setEvent.js';

document.addEventListener('DOMContentLoaded', function () {
	const detailsAll = document.querySelectorAll('.b--accordion');
	detailsAll.forEach((details) => {
		setEvent(details);
	});
});
