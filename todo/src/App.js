import React, { useReducer} from 'react';
import logo from './logo.svg';
import { TodoForm } from './component/TodoForm';
import { TodoList } from './component/TodoList';
import './App.css';
import { initialState, reducer } from './reducers/reducer';

function App() {

  const [ state, dispatch ] = useReducer(reducer, initialState);
    console.log(state);

    const addTodo = (input) => {
      const newTodo = {
          todo: input,
          completed: false,
          id: new Date()
      }
      dispatch({type:"ADD_TODO", payload: newTodo})
  }

  const handleComplete = (id) => {
      dispatch({type:"COMPLETED_TODO", payload: id})
  }

  const clearCompleted = () => {
      dispatch({type: "CLEAR_COMPLETED_TODO"})
  }
  return (
    <div className="App">
      <TodoForm addTodo={addTodo} />
            <TodoList state={state} handleComplete={handleComplete} />

            <button onClick={(event) =>{
                event.preventDefault();
                clearCompleted();}}
            >Clear Completed</button>
    </div>
  );
}

export default App;
