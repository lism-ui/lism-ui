/**
 * "use client" の記述を加えて返す。
 */

// とりあえず全部を取得して必要なものは上書きexportする形式。
export * from '@lism-ui/core';

// components を src から読み込むなら↓
// export { Box } from '@lism-ui/core/src/components/Box';
// export { Container } from '@lism-ui/core/src/components/Container';
// export { Flow } from '@lism-ui/core/src/components/Flow';
// export { Flex } from '@lism-ui/core/src/components/Flex';
// export { Stack } from '@lism-ui/core/src/components/Flex/Stack';
// ...

// components/* が dist なら↓
// export { default as Box } from '@lism-ui/core/components/Box';
// export { default as Center } from '@lism-ui/core/components/Flex/Center';
// export { default as Container } from '@lism-ui/core/components/Container';
// export { default as Flow } from '@lism-ui/core/components/Flow';
// export { default as Flex } from '@lism-ui/core/components/Flex';
// export { default as Stack } from '@lism-ui/core/components/Flex/Stack';
// export { default as Cluster } from '@lism-ui/core/components/Flex/Cluster';
// ...

/*
	use client をつけて返すもの
*/
export { default as Accordion } from './Accordion';
// export { default as AccordionHeader } from './AccordionHeader';
// export { default as AccordionBody } from './AccordionBody';
export { default as Tabs } from './Tabs';
export { default as TabItem } from './TabItem';
// export { default as Dialog } from './Dialog';
