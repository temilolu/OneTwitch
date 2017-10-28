import React from 'react';

const Feeds = () => (
	<div>
		<div className="feed">
			<div className="feed--video" />
			<div className="feed--details">
				<div>
					<a href="/channel">
						<img className="sidebar--right--img" src="/public/logo.svg" alt="c-img" />
						<span>channel name</span>
					</a>
				</div>
				<button> like </button> <span>100</span>
			</div>
		</div>
	</div>
);

export default Feeds;
