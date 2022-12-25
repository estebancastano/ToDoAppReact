import { useState } from 'react';
import data from './data.json'
import TodoList from './components/TodoList'
import './App.css';
import TodoForm from './components/TodoForm';

function App() {

  const [todos, setTodos] = useState(data);

  const onComplete = (id) => {
    
    setTodos(todos.map((todo) =>{
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo};
    }))
  }

  const onDeleteItem = (id) =>{
    setTodos([...todos].filter(todo => todo.id !== id));
  }

  return (
    <div className="container">
      <TodoForm />
      <TodoList todos = {todos} onComplete = {onComplete} onDeleteItem = {onDeleteItem}/>
    </div>
  );
}

export default App;
