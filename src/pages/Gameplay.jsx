import GameplayLayout from '../components/layout/Gameplay.jsx'

function Gameplay({ isMobile, loggedIn }) {
	return (
		<div className="container">
			<GameplayLayout isMobile={isMobile} loggedIn={loggedIn} />
		</div>
	)
}

export default Gameplay;
