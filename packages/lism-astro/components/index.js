/**
 * .astro でLismコンポーネントを配布
 */

// Memo: 取り急ぎ、コアのものを全部 export しつつ、.astro で用意できたものから上書きしていく。
// export * from '@lism-ui/core'; // core はReact であることに注意。

// export { default as Lism } from './Lism/Lism.astro';
// export { Lism, Text, Media, Link } from './Lism';
export * from './Lism';
export * from './Dummy';

export * from './Box';
export * from './Flex';
export * from './Stack';
export * from './Grid';
export * from './Columns';
export * from './Center';
export * from './Layer';
export * from './WithSide';

export * from './Container';
export * from './Frame';
export * from './Spacer';
export * from './Avatar';
// export * from './Delimiter';
export * from './Decorator';
export * from './Divider';
export * from './ShapeDivider';
export * from './Icon';

export * from './LinkBox';

// export * from './Callout';
export * from './Badge';
export * from './Button';
export * from './Table';
export * from './List';

// Dynamic
export * from './Accordion';
export { default as Modal } from './Modal';
export * from './Tab';

// export * from './Note';
export * from './Reel';
export * from './NavMenu';

export { default as Test } from './Test';

// export * from './Card';
// export * from './Chat';
