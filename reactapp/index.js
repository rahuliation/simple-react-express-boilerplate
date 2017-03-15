import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import App from './app.jsx' ;

ReactDOM.render(
	<Router >
	 		<Route  component={App}/>      
	  </Router>
	
	, document.getElementById('app')
	
)