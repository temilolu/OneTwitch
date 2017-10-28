import React from 'react';
import Header from './Header';
import GamesCard from './GamesCard';
import preload from '../db.json';

const Games = () => (
	<div>
		<Header />

		<div className="container">
			<div className="mar-top">
				<h3>Games</h3>
				<hr />
			</div>
			<div>{preload.games.map(games => <GamesCard key={games.id} games={games} />)}</div>
		</div>
	</div>
);

export default Games;
