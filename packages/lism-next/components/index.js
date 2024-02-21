/**
 * "use client" の記述を加えて返す。
 */

// とりあえず全部を取得して必要なものは上書きexportする形式。
export * from '@loos/lism-core';

// components を src から読み込むなら↓
// export { Box } from '@loos/lism-core/src/components/Box';
// export { Container } from '@loos/lism-core/src/components/Container';
// export { Flow } from '@loos/lism-core/src/components/Flow';
// export { Flex } from '@loos/lism-core/src/components/Flex';
// export { Stack } from '@loos/lism-core/src/components/Flex/Stack';
// ...

// components/* が dist なら↓
// export { default as Box } from '@loos/lism-core/components/Box';
// export { default as Center } from '@loos/lism-core/components/Flex/Center';
// export { default as Container } from '@loos/lism-core/components/Container';
// export { default as Flow } from '@loos/lism-core/components/Flow';
// export { default as Flex } from '@loos/lism-core/components/Flex';
// export { default as Stack } from '@loos/lism-core/components/Flex/Stack';
// export { default as Cluster } from '@loos/lism-core/components/Flex/Cluster';
// ...

/*
	use client をつけて返すもの
*/
export { default as Accordion } from './Accordion';
export { default as AccordionHeader } from './AccordionHeader';
export { default as AccordionBody } from './AccordionBody';

// export { Accordion, AccordionBody, AccordionHeader } from './AccordionHeader';

// export { Tab, TabItem } from './Tab';
