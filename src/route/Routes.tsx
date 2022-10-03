import { lazy } from 'react';
const Home = lazy(() => import('pages/home'));

/**
 * Application Routes
 */
export const RouteItems = [
	{
		path: '/',
		exact: true,
		name: 'home',
		content: Home,
	},
];
