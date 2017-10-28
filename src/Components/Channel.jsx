import React from 'react';
import Header from './Header';
import Feeds from './Feeds';
import Sidebar from './Sidebar';

const Browse = () => (
	<div>
		<Header />

		<div className="container">
			<div className="mar-top">
				<h3>Channel</h3>
				<hr />

				<div className="row">
					<div className="col-6">
						<Feeds />
						<Feeds />
					</div>

					<div className="col-4">
						<Sidebar />
					</div>
				</div>
			</div>
		</div>
	</div>
);

export default Browse;
