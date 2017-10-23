import React from 'react';
import { shape, string } from 'prop-types';

const GamesCard = props => (
	<div>
		<div>
			<div>
				<img alt={`${props.games.game_name} show poster`} src={props.games.game_img} />
				<h4>{props.games.game_name}</h4>
			</div>
		</div>
	</div>
);

GamesCard.propTypes = {
	games: shape({
		game_name: string.isRequired,
		game_img: string.isRequired,
	}).isRequired,
};
export default GamesCard;
