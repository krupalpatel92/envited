import { Link } from 'react-router-dom';

const E404: React.FC = () => (
	<div>
		Page not found. Go to{' '}
		<Link to='/'>
			<u>Home Page</u>
		</Link>
	</div>
);

export default E404;
