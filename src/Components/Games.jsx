import React from 'react';
import GamesCard from './GamesCard';
import preload from '../db.json';

const Games = () => (
	<div>
		<div>{preload.games.map(games => <GamesCard games={games} />)}</div>
	</div>
);

export default Games;
