document.addEventListener('DOMContentLoaded', function () {
	// console.log('lism-tab script.js');
	// タブへのリンクがあるかどうか
	const nowUrl = window.location.href;
	const hasTabLink = -1 !== nowUrl.indexOf('?lism-tab=');

	const tabs = document.querySelectorAll('.l--tab');
	// console.log('tabs', tabs);
	tabs.forEach((tab) => {
		const tabButtons = tab.querySelectorAll('.l--tab__button');
		tabButtons.forEach((tabBtn) => {
			tabBtn.addEventListener('click', function (e) {
				// console.log('tabBtn click');
				// タブへのリンクをURLにセット → そこまではやりすぎな気がするのでオフ
				// if (hasTabLink) {window.history.pushState({}, '', `?tab=${indx}#${tab.id}`);}
				tabControl(e);
			});
		});

		// URLでタブを切り替える機能がONかどうか
		if (hasTabLink) {
			// URLSearchParamsオブジェクトを取得
			const url = new URL(nowUrl);
			const params = url.searchParams;

			// getメソッド
			const targetTabId = params.get('lism-tab');
			const target = tab.querySelector(`[aria-controls="tab-${targetTabId}"]`);
			if (target) {
				// transitionをオフにするための属性
				tab.dataset.hasTabLink = '1';

				// タブ切り替え
				toggleAriaData(target);

				// 少し後で属性削除
				setTimeout(() => {
					delete tab.dataset.hasTabLink;
				}, 5);
			}
		}
	});
});

/**
 * タブ
 */
function tabControl(e) {
	e.preventDefault();

	// クリックイベントがキー（Enter / space）によって呼び出されたかどうか
	const iskeyClick = 0 === e.clientX;

	// クリックされたボタン要素
	const clickedButton = e.currentTarget;

	// マウスクリック時はフォーカスを外す
	if (!iskeyClick) {
		clickedButton.blur();
	}

	// 属性の切り替え
	toggleAriaData(clickedButton);
}

const toggleAriaData = (clickedButton) => {
	console.log('clickedButton', clickedButton);
	// すでにオープンされているタブの場合はなにもしない
	const isOpend = 'true' === clickedButton.getAttribute('aria-selected');
	if (isOpend) return;

	// 新しく表示するBodyを取得
	const targetID = clickedButton.getAttribute('aria-controls');
	const targetBody = document.getElementById(targetID);
	if (null === targetBody) return;

	// 親のタブリスト(ul)を取得
	const parentTabList = clickedButton.parentNode.parentNode;

	// 現在選択中のタブボタンを取得
	const selectedButton = parentTabList.querySelector('[aria-selected="true"]');

	// 展開中のBodyを取得
	const displayedID = selectedButton.getAttribute('aria-controls');
	const displayedBody = document.getElementById(displayedID);

	// ariaの処理
	clickedButton.setAttribute('aria-selected', 'true');
	selectedButton.setAttribute('aria-selected', 'false');
	displayedBody.setAttribute('aria-hidden', 'true');
	targetBody.setAttribute('aria-hidden', 'false');
};
