import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from './app.js' ;

ReactDOM.render(
	<Router >
	 		<Route  component={App}/>      
	  </Router>
	
	, document.getElementById('app')
	
)