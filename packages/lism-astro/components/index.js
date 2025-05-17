/**
 * .astro でLismコンポーネントを配布
 */

// Memo: 取り急ぎ、コアのものを全部 export しつつ、.astro で用意できたものから上書きしていく。
// export * from '@lism-ui/core'; // core はReact であることに注意。

// export { default as Lism } from './Lism/Lism.astro';
// export { Lism, Text, Media, Link } from './Lism';
export * from './Lism';
export * from './Dummy';

// l--
export * from './Box';
export * from './Flex';
export * from './Stack';
export * from './Grid';
export * from './Columns';
export * from './Center';
export * from './WithSide';
export * from './Frame';

export * from './Container';
export * from './Layer';
export * from './LinkBox';

// a--
export * from './Spacer';
export * from './Decorator';
export * from './Divider';
export * from './Icon';
// export * from './Delimiter';

// d--
export { default as Accordion, Accordions } from './Accordion';
export { default as Modal } from './Modal';
export { default as Tabs } from './Tabs';

// b--
// export * from './Avatar';
// export * from './Badge';
// export * from './Button';

// c--
// export * from './Callout';
// export * from './Note';
// export * from './Card';
// export * from './Chat';
export * from './Table';
// export * from './List';
// export * from './ShapeDivider';
export * from './Reel';
export * from './NavMenu';

// export { default as Test } from './Test';
