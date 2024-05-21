import { Lism } from '../Lism';
// import getProps from './getProps';

export default function Frame({ layout, ...props }) {
	const Layout = layout || Lism;
	return <Layout {...props} />;
}
