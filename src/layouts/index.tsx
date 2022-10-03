import { lazy, Suspense } from 'react';
import styles from './Layouts.module.scss';
import Header from './components/header';
import Content from './components/content';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RouteItems } from 'route/Routes';
import ErrorBoundary from 'route/ErrorBoundary';
import Loader from 'components/ui-kit/Loader';

const E404 = lazy(() => import('pages/404'));

const Layout: React.FC = () => (
	<BrowserRouter>
		<div className={styles.layout}>
			<Header />
			<Content>
				<Suspense fallback={<Loader />}>
					<ErrorBoundary>
						<Switch>
							{RouteItems.map(route => (
								<Route key={`root.${route.name}`} exact={route.exact} path={route.path}>
									<route.content />
								</Route>
							))}
							<Route>
								<E404 />
							</Route>
						</Switch>
					</ErrorBoundary>
				</Suspense>
			</Content>
		</div>
	</BrowserRouter>
);

export default Layout;
