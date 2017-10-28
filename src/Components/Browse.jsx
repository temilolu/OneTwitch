import React from 'react';
import Header from './Header';

const Browse = () => (
	<div>
		<Header />

		<div className="container">
			<div className="mar-top">
				<ul className="list-inline">
					<li className="list-inline-item">
						<a href="/">Games</a>
					</li>
					<li className="list-inline-item">
						<a href="/browse">Channels</a>
					</li>
					<li className="list-inline-item">
						<a href="/following">Popular</a>
					</li>
				</ul>
				<hr />
			</div>
		</div>
	</div>
);

export default Browse;
