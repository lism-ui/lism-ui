/**
 * .astro でLismコンポーネントを配布
 */

// Memo: コアのものを全部 export しつつ、.astro で用意できたものから上書きしていくパターン
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
export * from './WithSide';
export * from './Frame';

export * from './Container';
export * from './Layer';
export * from './LinkBox';

export * from './Spacer';
export * from './Decorator';
export * from './Divider';
export * from './Icon';

export { default as Accordion, Accordions } from './Accordion';
export { default as Modal } from './Modal';
export { default as Tabs } from './Tabs';

export * from './Reel';

// export { default as Test } from './Test';
