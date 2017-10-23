import React from 'react';
import preload from '../db.json';

const Search = () => (
	<div>
		<div>
			{preload.users.map(users => (
				<div>
					<h3>{users.first_name}</h3>
					<p>{users.email}</p>
				</div>
			))}
		</div>

		<div>
			{preload.games.map(games => (
				<div>
					<h3>{games.game_name}</h3>
					<img alt={`${games.game_name} show poster`} src={games.game_img} />
				</div>
			))}
		</div>
	</div>
);

export default Search;
