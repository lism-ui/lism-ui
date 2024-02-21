// import React from 'react';
import { Lism } from '../Lism';
import getProps from './getProps';

// variantで受け取り、modifierにセット。→セットせずそのままmodifierのみでもいいか
export default function Decorator(props) {
	return <Lism skipState {...getProps(props)} aria-hidden='true' />;
}
