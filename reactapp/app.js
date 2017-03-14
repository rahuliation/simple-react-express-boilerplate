import React from 'react'
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-dom';
import Home from './home.js' ;
import Another from './another.js';



class App extends React.Component {
   render() {
      return (
        <div>
    		  <ul>
    	       <li><Link to="/">wowo</Link></li>
    	       <li><Link to="/home">Home</Link></li>
    	       <li><Link to="/another">Another</Link></li>
    	     </ul>
    	     <Route path="/home" component={Home}/>
      		 <Route path="/another" component={Another}/>
         </div>

      );
   }
};

export default App;