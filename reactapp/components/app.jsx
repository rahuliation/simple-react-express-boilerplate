import React from 'react';
import { Route, Link } from 'react-router-dom';
import Todos from './todos.jsx'
import Home from './home.jsx'


class App extends React.Component {
   render() {
      return (
        <div>
    		  <ul>
    	       <li className="omuk"><Link to="/">wowo</Link></li>
    	       <li><Link to="/home">Home</Link></li>
    	       <li><Link to="/todos">Todos</Link></li>
    	     </ul>
        <Route path="/todos" component={Todos} />
        <Route path="/home" component={Home} />
         </div>

      );
   }
};

export default App;