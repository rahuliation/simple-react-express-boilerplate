import React from 'react';
import {connect} from 'react-redux';
import {Add_todo} from '../actions/actions'
import {bindActionCreators} from 'redux'

class TodosList extends React.Component {

  constructor () {

      super();

  }

   list_render() {

    return  this.props.todos.list.map(function(obj){
       return (
       <li key={obj.id}> 
       {obj.task}       
       </li>);
    });
   }

   render() {
      return (
      <div>
    		  <ul>
    	       { this.list_render() }
    	    </ul>
      </div>

      );
   }
};

function mapState(state) {
  const { todos } = state;

  return { todos };
}




export default connect(mapState)(TodosList);