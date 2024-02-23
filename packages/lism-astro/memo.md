devDependenciesに@lism-ui/coreいれとかないと読み込めない。

完全に dependencies にして、 @lism-ui/astro だけ入れてもらってもいいかも？

## astro:jsx について

```jsx
<Hoge label={<span>text!</span>} />
```

↓ Hoge.astro で console.log(Astro.props.label)

```jsx
{
  'astro:jsx': true,
  type: 'span',
  props: { children: 'text!' },
  [Symbol(astro:renderer)]: 'astro:jsx'
}
```

```jsx
<Hoge label={<Box>text!</Box>} />
```

↓ Hoge.astro で console.log(Astro.props.label)

```jsx
{
  'astro:jsx': true,
  type: [Function: Box],
  props: { children: 'text!' },
  [Symbol(astro:renderer)]: 'astro:jsx'
}
```

```jsx
<Tab label={<img src="https://via.placeholder.com/20x20" width="20" height="20" />} />

↓

{
  'astro:jsx': true,
  type: 'img',
  props: {
    src: 'https://via.placeholder.com/20x20',
    width: '20',
    height: '20'
  },
  [Symbol(astro:renderer)]: 'astro:jsx'
}
```
