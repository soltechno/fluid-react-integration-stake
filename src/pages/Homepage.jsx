import { Link } from 'react-router-dom';

function Homepage({ children }) {
	return (
		<div>
			<Link to="/juego/gates-of-olympus-1000">
				<img src="screenshot-homepage.png" />
			</Link>
		</div>
	)
}

export default Homepage;
