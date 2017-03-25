import React from 'react';
import {connect} from 'react-redux';
import {Add_todo} from '../actions/actions'
import {bindActionCreators} from 'redux'


class TodoInput extends React.Component {
   render() {
       console.log(this.props)
      return (
      <div>
     <input type="text" id="insert_text" />
     <button onClick={ () => this.props.Add_todo(document.getElementById('insert_text').value)}> submit </button>

      </div>

      );
   }
};

function mapDispatch(dispatch) {
  return bindActionCreators({Add_todo}, dispatch);
}

function mapState(state) {
  return { };
}






export default connect(mapState,mapDispatch)(TodoInput);