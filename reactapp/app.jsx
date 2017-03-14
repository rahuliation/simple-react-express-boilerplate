import React from 'react'
import ReactDOM from 'react-dom';
import { Link } from 'react-router';
import Home from './home.jsx';
import Another from './another.jsx';


class App extends React.Component {
   render() {
      return (
         <div>
		<ul>

		</ul>
   {this.props.children}
         </div>
      );
   }
}

export default App;
