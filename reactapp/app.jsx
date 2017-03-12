import React from 'react'
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

class App extends React.Component {
   render() {
      return (
         <div>

    amake bole abar

   {this.props.children}
         </div>
      );
   }
}

export default App;
