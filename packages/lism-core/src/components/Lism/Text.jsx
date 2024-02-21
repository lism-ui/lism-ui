// import React from 'react';
import Lism from './Lism';

// 省略可能にするかどうかは、要検討
export default function Text({ tag = 'p', ...props }) {
	// 一部のプロパティはTextでのみ受け取れるようにするか？
	return <Lism skipState tag={tag} {...props} />;
}
