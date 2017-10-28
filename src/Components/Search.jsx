import React, { Component } from 'react';
import preload from '../db.json';

class Search extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchTerm: '',
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
					<h1>OneTwitch</h1>
					<a href="/">Home</a>

					<input placeholder={this.state.searchTerm} onChange={this.handleSearchTermChange} type="text" />
				</header>
				<div>
					{/*
					The filter helps to search through the games data
					(It's responsible for the awesomeness in search)
				*/}

					{preload.games
						.filter(
							games =>
								`${games.game_name}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
						)
						.map(games => (
							<div key={games.id}>
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
