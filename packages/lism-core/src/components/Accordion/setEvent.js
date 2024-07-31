// open 属性付与からクラスの付与まで、ほんの少しだけ遅らせた方が動作が安定する
const DELAY = 5;

// :scope 使う？

// animationTime: [ms]
const clickedEvent = (details, durationTime, force = false) => {
	// すぐに open 属性が切り替わらないようにする
	// e.preventDefault();
	// console.log(e.target, e.currentTarget);

	if (details.dataset.animating && !force) return;
	details.dataset.animating = '1';

	// オープン / クローズ 処理
	if (!details.open) {
		details.open = true;
		// 少しだけ遅らせた方が動作が安定する
		setTimeout(() => {
			details.classList.add('-opened'); // クラスの追加
		}, DELAY);

		// アニメーション完了後に dataset を除去。
		setTimeout(() => {
			delete details.dataset.animating;
		}, durationTime + DELAY);
	} else if (details.open) {
		details.classList.remove('-opened'); // クラスを削除

		// アニメーション完了後に open属性 を除去。（CSS側のアニメーション時間 + 少しだけ余裕をもたせている）
		setTimeout(() => {
			details.open = false;
			delete details.dataset.animating;
		}, durationTime + DELAY);
	}
};

const toggleEvent = (e, details) => {
	// e.preventDefault();
	// console.log('toggleEvent', e.target, e.currentTarget);

	const hasOpen = details.open;
	const hasOpenedClass = details.classList.contains('-opened');

	// open はセットされたのに -opened クラスがついてない時
	if (hasOpen && !hasOpenedClass) {
		details.classList.add('-opened');
	}
	// open は削除されたのに -opened クラスがまだついている時
	if (!hasOpen && hasOpenedClass) {
		details.classList.remove('-opened');
	}
};

function convertToMsNumber(time) {
	let totalMilliseconds = 0;

	// 秒を変換
	const secondsMatch = time.match(/([\d.]+)s/);
	if (secondsMatch) {
		totalMilliseconds = parseFloat(secondsMatch[1]) * 1000;
	}

	// ミリ秒を変換
	const millisecondsMatch = time.match(/([\d.]+)ms/);
	if (millisecondsMatch) {
		totalMilliseconds = parseFloat(millisecondsMatch[1]);
	}

	return Math.round(totalMilliseconds); // 少数点以下を丸める
}

const setEvent = (currentRef) => {
	const details = currentRef;
	// トリガーが明示的に指定されていない場合は、<summary> 要素をトリガーとする
	const clickBtn =
		details.querySelector(`[data-role="trigger"]`) || details.querySelector('summary');

	if (!clickBtn) return;

	// カスタムプロパティ --duration の値を取得
	const computedStyle = getComputedStyle(details);
	let durationTime = computedStyle.getPropertyValue('--duration').trim();

	// ms単位の数値に変換
	durationTime = convertToMsNumber(durationTime);
	// console.log('durationTime', durationTime);

	// 複数展開を許可するかどうか
	let allowMultiple = false;
	const parent = details.parentNode;
	if (null != parent) {
		const dataMultiple = parent.dataset.multiple;
		allowMultiple = 'disallow' !== dataMultiple;
	}

	const _clickedEvent = (e) => {
		// すぐに open 属性が切り替わらないようにする
		e.preventDefault();

		// 複数展開を許可しない場合、（開く処理の直前で）他の開いているアイテムがあれば閉じる
		if (!allowMultiple && !details.open) {
			const openedItem = parent.querySelector(`.b--accordion.-opened`);
			if (null != openedItem) clickedEvent(openedItem, durationTime, true);
		}

		// 自身のクリック処理
		clickedEvent(details, durationTime);
	};
	const _toggleEvent = (e) => {
		toggleEvent(e, details);
	};

	// <summary> 'click' イベント
	clickBtn.addEventListener('click', _clickedEvent);

	// <details> の'toggle' イベントで、ページ内検索時にも開閉されるようにする
	details.addEventListener('toggle', _toggleEvent);

	// useEffectでアンマウントされた時にremoveEventListenerしないと2重でイベントが登録してしまう。
	return () => {
		clickBtn.removeEventListener('click', _clickedEvent);
		details.removeEventListener('toggle', _toggleEvent);
	};
};

export default setEvent;
