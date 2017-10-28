import React from 'react';

const Header = () => (
	<header>
		<div className="container">
			<div className="row">
				<div className="col-3">
					<h3>
						<a href="/">
							<img src="/public/logo.svg" alt="onetwitch" />
						</a>
					</h3>
				</div>

				<div className="col-5">
					<input type="text" className="form-control" placeholder="search" />
				</div>

				<div className="col-4">
					<div className="row">
						<ul className="list-inline">
							<li className="list-inline-item">
								<a href="/">Home</a>
							</li>
							<li className="list-inline-item">
								<a href="/browse">browse</a>
							</li>
							<li className="list-inline-item">
								<a href="/following">Following</a>
							</li>

							<li className="list-inline-item">
								<a href="/">Login</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	</header>
);

export default Header;
