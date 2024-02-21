/**
 * "use client" の記述を加えて返す。
 */

// そのままでいいもの
// export { Box, ... } from "../dist";
export * from '../dist';

// export { default as Columns } from "./Columns";
export { Columns } from './Columns';
// export { Accordion } from './Accordion';
// components/index.tsx
export * as Accordion from './Accordion';

console.log('next!');
