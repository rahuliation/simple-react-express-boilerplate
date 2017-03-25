import React from 'react';
import TodoInput from '../containers/todoinput.jsx';
import TodoList from '../containers/todolist.jsx';


class Todos extends React.Component {
   render() {
      return (
         <div>
        <TodoInput />
        <TodoList />
         </div>

      );
   }
};

export default Todos;