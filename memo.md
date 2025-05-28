## publish

npm publish --access=public

## 開発時のキャッシュ削除

next.js
rm -rf .next/cache

## 使用時の注意

next.js 13 以降の app ルーター使用時、Reat Hook を使ったコンポーネントを使う際に "use client"; の記述が必要。

※ "@lism-ui/test/components" から直接インポートしてもらうようにすると Lism 側で書いておけば必要なくなる?
→ ビルド時にエラーがでた。が、無視しても問題なさそう...？

ただし、/components から直接ソース読み込む場合、`next.config.js` で下記の設定が必要だった

```
transpilePackages: ['@lism-ui/test'],
```

# Prettier と Eslint,Stylelint についてのメモ

## 現状

- コード整形は prettier が担当。
- eslint にエラー表示をしてもらう
- stylelintの自動整形はvscodeプラグインのコメント解析不具合により断念。フォーマットはprettierに任せ、Taskでlintを動かす。

## 必要な VSCode の拡張機能

- Prettier
- ESLint (ファイル開いてる時にエラー表示)

## vscode の settings

```
	"editor.formatOnSave": true,
	"editor.defaultFormatter": "esbenp.prettier-vscode",
	"[scss]": {
		"editor.defaultFormatter": "esbenp.prettier-vscode"
	}
```

(prettierはscssも標準対応してるはずだが、明示的に書かないと動かなかった)

## モノレポにおけるlint ファイルについて

.editorconfig や lint系設定ファイルは、基本的にルートに置いておくだけでよさそう。
astro プロジェクトは prettierrc 上書きするためにそれぞれ用意したりする。

## stylelint

stylelint 16 にすると、vscodeのstylelintプラグインで自動整形させると保存するたびにバグる.
