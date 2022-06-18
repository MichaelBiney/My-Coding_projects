import React, {useState} from 'react'
import './App.css';
import Todoform from './componets/TodoForm';

function App() {
  const [todos,setTodos] = useState([]);

  function addTodo(todo) {
    setTodos([todo, ...todos]);
  }

  return (
    <div className='App'>
      <header className='app-header'>
      <p>React todo</p>
      <Todoform addTodo={addTodo} />
      </header>
    </div>
  );
}

export default App;
