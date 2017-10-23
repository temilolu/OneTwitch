import React from 'react';

const Nav = () => (
	<nav>
		<h1>OneTwitch!</h1>
		<a href="/">Home</a>
		<a href="/browse">browser</a>
		<a href="/following">Following</a>
		<a href="/search">Search</a>
		<a href="/games">Games</a>

		<input type="text" placeholder="search" />
	</nav>
);

export default Nav;
