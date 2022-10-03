import React from 'react';
import styles from './home.module.scss';

import Button from 'components/ui-kit/Button';
const Home: React.FC = () => (
	<div className={styles.wrapper}>
		<h1 className={styles.title}>
			Imagine if <span>Snapchat</span> had events.
		</h1>
		<p className={styles.description}>Easily host and share events with your friends across any social media.</p>
		<div className={styles.appScreen}>
			<img src='/assets/images/movie-night.svg' />
		</div>
		<Button label='🎉 Create my event' />
	</div>
);

export default Home;
