import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './Components/Home';
import Browse from './Components/Browse';
import Following from './Components/Following';
import Search from './Components/Search';
import Games from './Components/Games';

const FourohFour = () => <h1>404 error</h1>;
const App = () => (
	<BrowserRouter>
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
				<Route path="/browse" component={Browse} />
				<Route path="/following" component={Following} />
				<Route path="/search" component={Search} />
				<Route path="/games" component={Games} />
				<Route component={FourohFour} />
			</Switch>
		</div>
	</BrowserRouter>
);

render(<App />, document.getElementById('app'));
