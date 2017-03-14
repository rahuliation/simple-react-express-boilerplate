import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, IndexRoute } from 'react-router';
import Home from './home.jsx';
import Another from './another.jsx';
import App from './app.jsx';

// More components



ReactDOM.render(
	<BrowserRouter >
			<Route  component={App} >
		      	<Route path="/another" component={Another} />
			 	<Route path="/home" component={Home} />
			</Route>
	</BrowserRouter >, document.getElementById('app')
)