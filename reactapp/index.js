import React from 'react'
import ReactDOM from 'react-dom';
import {Router, Route, Link, IndexRoute, hashHistory, browserHistory} from 'react-router';
import App from './app.jsx';
import Home from './home.jsx';


ReactDOM.render(
  <Router path={typeof to === 'object' ? to.pathname : to}
  children={({ location, match }) => {
    const isActive = !!(getIsActive ? getIsActive(match, location) : match) }} history={browserHistory}>
    <Route path='/' component={App}>
      <IndexRoute component={Home} />
      <Route path='home' component={Home} />

    </Route>
  </Router>,
  document.getElementById('app')
);
