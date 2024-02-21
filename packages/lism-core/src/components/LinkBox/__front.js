import setEvent from './__setEvent';

// console.log("linkbox.js");
// document.addEventListener("DOMContentLoaded", function () {
// 	console.log("DOMContentLoaded");
(function () {
	const linkBoxs = document.querySelectorAll('.b--linkBox[data-linkbox="div"]');
	linkBoxs.forEach((lb) => {
		setEvent(lb);
	});
})();
// });
