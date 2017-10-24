import React, { Component } from 'react';
import preload from '../db.json';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: 'this is some sort of debug statement',
		};
		this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
	}

	handleSearchTermChange(event) {
		this.setState({ searchTerm: event.target.value });
	}
	render() {
		return (
			<div>
				<header>
					<h1>OneTwitch!</h1>
					<a href="/">Home</a>

					<input placeholder={this.state.searchTerm} onChange={this.handleSearchTermChange} type="text" />
				</header>
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
	}
}

export default Search;
