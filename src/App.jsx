import { useCallback, useEffect, useState } from 'react';
import './App.css'
import TodoInput from './TodoInput'
import TodoList from './TodoList'

function App() {

  const [todos, setTodos] = useState([ ]);

  const deleteTodoById = useCallback((value) => {
    setTodos((prevTodos) => prevTodos.filter(todo => todo.value !== value));
  }, []);

  function onTodoFormSubmit(value){
    if(value){
      setTodos((prevTodos) => [ ...prevTodos, { value } ]);
    }
  }

  useEffect(() => {
    console.log("Todos: ", todos);
  }, [ todos ]);

  return (
    <>
      <TodoInput onSubmit={onTodoFormSubmit}/>

      <TodoList listOfTodos={todos} onDeleteTodo={deleteTodoById}/>
    </>
  )
}

export default App
