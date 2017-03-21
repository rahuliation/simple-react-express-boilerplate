import React from 'react'
import ReactDOM from 'react-dom';
import { Route, Link } from 'react-router-redux';
import Home from './home.jsx' ;
import Another from './another.jsx';



class App extends React.Component {
   render() {
      return (
        <div>
    		  <ul>
    	       <li className="omuk"><Link to="/">wowo</Link></li>
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