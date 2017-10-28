import React from 'react';
import Header from './Header';
import Feeds from './Feeds';
import Sidebar from './Sidebar';

const Home = () => (
	<div>
		<Header />
		<div className="container">
			<div className="row">
				<div className="col-2">
					<div className="sidebar--right">
						<span>Followed channels</span>
						<hr />

						<ul className="list-unstyled">
							<li>
								<a href="/channel">
									<img className="sidebar--right--img" src="/public/logo.svg" alt="c-img" />
									<span>channel name</span>
								</a>
							</li>

							<li>
								<a href="/channel">
									<img className="sidebar--right--img" src="/public/logo.svg" alt="c-img" />
									<span>channel name</span>
								</a>
							</li>
						</ul>
					</div>
				</div>
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
);

export default Home;
