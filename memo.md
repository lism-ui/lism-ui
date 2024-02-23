## publish

npm publish --access=public

## 開発時のキャッシュ削除

next.js
rm -rf .next/cache

## 使用時の注意

next.js 13 以降の app ルーター使用時、Reat Hook を使ったコンポーネントを使う際に "use client"; の記述が必要。

※ "@lism-ui/test/components" から直接インポートしてもらうようにすると Lism 側で書いておけば必要なくなる?
→ビルド時にエラーがでた。が、無視しても問題なさそう...？

ただし、/components から直接ソース読み込む場合、`next.config.js` で下記の設定が必要だった

```
transpilePackages: ['@lism-ui/test'],
```

# Prettier と Eslint についてのメモ

## 目標：

-   html、js のコード保存時、自動で prettier が動いて整形されるようにする。
-   eslint にエラー表示をしてもらう

### 必要だった npm package

-   "prettier",
-   "eslint",
-   "eslint-config-prettier",
-   "eslint-config-standard",

### 必要な VSCode の拡張機能

-   ESLint,
-   Prettier (projcet でのみ有効化中)

### vs code に必要な設定

(html, js に対する vscode 側のデフォルトフォーマット機能をオフにし、Eslint プラグイン側の format もオフにすることで、保存時に prettier が動くようになる。)

```
{
	"html.format.enable": false,
	"javascript.format.enable": false,
	"eslint.format.enable": false
}
```

## lintファイルについて

.editorconfig や lint設定ファイルは基本的にルートに置いておくだけでよさそう。
astroプロジェクトはprettierrc上書きするためにそれぞれ用意したりする。
