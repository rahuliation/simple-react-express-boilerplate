


const todolist={
  last_id: 3,
  list: [
  {
    id: 1,
    task: "task 1"       
  },
  {
    id: 2,
    task: "task 2"       
  }
  
  ]
}



const todos = (state = todolist, action) => {
   
   console.log(state);
  switch (action.type) {
    case 'ADD_TODO': 
    {
     var new_state={...state };
    new_state.list.push({
      id:new_state.last_id++,
      task: action.task
    })

    return new_state ;
    }
  
    
  
  }
   return state
}

export default {todos}