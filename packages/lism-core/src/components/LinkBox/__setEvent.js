function clickLink(e) {
	// linkboxが入れ子になっていた時に、親のlinkboxがクリックされるのを防ぐ
	e.stopPropagation();

	// コンテンツ内のリンクからイベントが伝搬してきた時は何もしない
	// memo: keydownイベント用。（clickイベントは childLinks でここに伝搬してこない）
	if ('A' === e.target.tagName) return true;

	e.preventDefault();

	// クリック対象のリンクがあるかチェック
	const a = e.currentTarget.querySelector('[data-linkbox="a"]');
	if (null === a) return;

	// 内部のaタグクリック時に親のlinkboxクリックイベントが発動しないようにする → childLinksで先に登録済み
	// a.onclick = (event) => { event.stopPropagation(); return true; };

	a.click();
}

// setEvent
export default function setEvent(currentRef) {
	const lb = currentRef;

	// linkBoxs.forEach((lb) => {
	// 内部のリンクでのclick,mousedownイベントが親のlinkboxに伝搬しないようにする。
	// memo: linkbox内部のaタグがさらにボックスリンクになっていて中にpタグ等がある場合に、linkbox側の処理中に 'A' === e.target.tagName で判定できない。
	const childLinks = lb.querySelectorAll('a');
	if (childLinks.length > 1) {
		childLinks.forEach((link) => {
			link.onclick = (event) => {
				event.stopPropagation();
				return true;
			};
			link.addEventListener('mousedown', (e) => {
				e.stopPropagation();
				return true;
			});
			// タブ操作でのkeydownは直接aに対して発動されて 'A' === e.target.tagName で判定可能なので、ここで伝搬を止める処理をわざわざ登録する必要はない。
		});
	}

	lb.addEventListener('click', function (e) {
		clickLink(e);
	});

	// Tabキー操作 → エンター でもクリックできるように
	lb.addEventListener('keydown', function (e) {
		if (e.keyCode !== 13) return; // Enter以外は何もしない
		clickLink(e);
	});

	// ホイールクリックで別タブで開く
	lb.addEventListener('mousedown', (e) => {
		// ホイールクリック以外は何もしない
		if (1 !== e.button) return;

		e.stopPropagation();
		e.preventDefault();

		// クリック対象のリンクがあるかチェック
		const a = e.currentTarget.querySelector('[data-linkbox="a"]');
		if (null === a) return;

		// 別タブで開く. → 新しいタブにフォーカスが移動してしまう問題があるが、どうしようもなさそう。
		window.open(a.getAttribute('href'));
	});
}
