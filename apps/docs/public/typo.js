document.addEventListener('DOMContentLoaded', function () {
	// const targetParagraphs = document.querySelectorAll('.fzDemo .b--demoBox__preview :is(p,h1,h2,h3,h4,h5,h6)');
	const targetParagraphs = document.querySelectorAll('.fzDemo .is--lipsum');

	// 各段落に対して処理を実行
	targetParagraphs.forEach((paragraph) => {
		const sizeTip = paragraph.previousElementSibling;

		// フォントサイズを取得 (px単位)
		const fontSizePx = parseFloat(window.getComputedStyle(paragraph).fontSize);
		// let lineHeight = parseFloat(window.getComputedStyle(paragraph).lineHeight);

		// フォントサイズをrem単位に変換 (16px = 1rem)
		const fontSizeRem = (fontSizePx / 16).toFixed(3);
		// lineHeight = (lineHeight / fontSizePx).toFixed(2);

		// フォントサイズを段落の先頭に追加
		// const tipText = `fz: ${fontSizeRem.replace('00', '0')}em, lh: ${lineHeight}</span>`;

		const tipText = ` : ${fontSizeRem.replace('00', '0')}em`;
		sizeTip.append(tipText);
	});
});
