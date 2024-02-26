// import React from 'react';
import { Lism } from '../Lism';

export default function Flow({ gap = true, ...props }) {
	return <Lism isFlow={gap} {...props} />;
}
