// <lism-placeholder-tabitem> → div.tabitem へ 変換
export default function transformHTML(htmlString, tabID, defaultIndex) {
	let index = 0;
	let btns = [];
	let panels = [];

	// starlghtの時は data-astro-source-file属性が自動でついてきたりするので、属性値があっても問題ないようにしておく。
	const regex = /<lism-placeholder-tabitem(.*?)>(.*?)<\/lism-placeholder-tabitem>/gs;
	const matches = [...htmlString.matchAll(regex)];

	matches.forEach((match) => {
		const tabItemAttrs = match[1];
		const tabContent = match[2];
		// const TABID = `${tabID}-${index}`;
		const isActive = index === defaultIndex;
		index++;

		// 各aria属性
		// const ariaSelected = isActive ? 'true' : 'false';
		// const ariaHidden = isActive ? 'false' : 'true';

		// <lism-placeholder-tablabel>からタブボタンを生成
		const labelMatch = tabContent.match(
			/<lism-placeholder-tablabel(.*?)>(.*?)<\/lism-placeholder-tablabel>/s
		);
		// const labelAttrs = labelMatch[1];
		const labelContent = labelMatch ? labelMatch[2] : '';

		// <lism-placeholder-tabpanel>からタブボタンを生成
		const panelMatch = tabContent.match(
			/<lism-placeholder-tabpanel(.*?)>(.*?)<\/lism-placeholder-tabpanel>/s
		);
		// const panelAttrs = panelMatch ? panelMatch[1] : '';
		const panelContent = panelMatch ? panelMatch[2] : '';

		// btns += `<button role="tab" class="c--tab__button" aria-selected="${ariaSelected}" aria-controls="${TABID}">${labelContent}</button>`;
		btns.push({
			// panelAttrs,
			// id: TABID,
			isActive,
			content: labelContent,
		});

		// panels += `<div role="tabpanel" id="${TABID}" aria-hidden="${ariaHidden}">${panelContent}</div>`;
		panels.push({
			// panelAttrs,
			// id: TABID,
			isActive,
			content: panelContent,
		});
	});

	// return `<div class='c--tab__list' role='tablist'>${btns}</div><div class='c--tab__panels'>${panels}</div>`;
	return { btns, panels };
}
