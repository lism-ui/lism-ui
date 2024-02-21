# prop にコンポーネント

渡せない。
see: https://github.com/withastro/astro/issues/681#issue-943762922

例：

```jsx
<Tab>
	<TabItem label='string'>...</TabItem>
	<TabItem label={<span>html-span</span>}>...</TabItem>
	<TabItem label={<Box>simple-react-component</Box>}>...</TabItem>
	<TabItem
		label={
			<Box>
				<span>span in Box</span>
			</Box>
		}
	>
		...
	</TabItem>
	<TabItem label={<>Fragment</>}>...</TabItem>
	<TabItem
		label={
			<>
				Before Text<small>small</small>AfterText
			</>
		}
	>
		...
	</TabItem>
</Tab>
```

`'astro:jsx': true` なオブジェクトとして渡ってくる。

```bash
# <TabItem label='string'>...</TabItem>
AstroJsxRender string


# <TabItem label={<span>html-span</span>}>
AstroJsxRender {
  'astro:jsx': true,
  type: 'span',
  props: { children: 'html-span' },
  [Symbol(astro:renderer)]: 'astro:jsx'
}

# <TabItem label={<span>code,span<code>code</code></span>}>
AstroJsxRender {
  'astro:jsx': true,
  type: 'span',
  props: { children: [ 'code,span', [Object] ] },
  [Symbol(astro:renderer)]: 'astro:jsx'
}


# <TabItem label={<Box>simple-react-component</Box>)>
AstroJsxRender {
  'astro:jsx': true,
  type: [Function: Box],
  props: { children: 'simple-react-component' },
  [Symbol(astro:renderer)]: 'astro:jsx'
}

#<TabItem label={<Box><span>span in Box</span></Box>}>
AstroJsxRender {
  'astro:jsx': true,
  type: [Function: Box],
  props: {
    children: {
      'astro:jsx': true,
      type: 'span',
      props: [Object],
      [Symbol(astro:renderer)]: 'astro:jsx'
    }
  },
  [Symbol(astro:renderer)]: 'astro:jsx'
}


#<TabItem label={<>Fragment</>}>
AstroJsxRender {
  'astro:jsx': true,
  type: Symbol(astro:fragment),
  props: { children: 'Fragment' },
  [Symbol(astro:renderer)]: 'astro:jsx'
}

# <>Before Text<small>small</small>AfterText</>
AstroJsxRender {
  'astro:jsx': true,
  type: Symbol(astro:fragment),
  props: { children: [ 'Before Text', [Object], 'AfterText' ] },
  [Symbol(astro:renderer)]: 'astro:jsx'
}
```
