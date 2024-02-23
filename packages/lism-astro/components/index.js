/**
 * .astro でLismコンポーネントを配布
 */

// Memo: 取り急ぎ、コアのものを全部 export しつつ、.astro で用意できたものから上書きしていく。
export * from '@lism-ui/core'; // core はReact であることに注意。

// export { default as Lism } from './Lism/Lism.astro';
export { Lism, Text, Media, Link } from './Lism';
export { Box } from './Box';
// export * from './Flex';
export { Flex, FlexItem, Cluster, Stack, SideFlex } from './Flex';
export { Grid, GridItem } from './Grid';

// state
export { Container } from './Container';
export { Frame } from './Frame';

export { Delimiter } from './Delimiter';
export { Decorator } from './Decorator';
export { Icon } from './Icon';
export { Alert } from './Alert';
// export * from './Note'; // → なぜかnot export になってしまう
export { Note } from './Note';
export { Tabs, TabItem, Tab, TabList, TabPanel } from './Tab';
// export * from './Banner';
// export * from './Layer';
export { Layer, MediaLayer } from './Layer';
export {
	Accordion,
	AccordionGroup,
	AccordionBody,
	AccordionHeader,
	AccordionLabel,
	AccordionIcon,
} from './Accordion';

export { Chat } from './Chat';

// 呼び出し元が .js か .astro かで自動で分けれる...？
// https://docs.astro.build/ja/reference/publish-to-npm/#exports
