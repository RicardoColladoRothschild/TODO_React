import React from 'react';
import './App.css';
import { AppUI } from './AppUI.js';
import { useLocalStorage } from './useLocalStorage.js';
//'TODOListRick_V1'



//localStorage.setItem('TODOListRick_V1', defaultTodos);
function App() {
  const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOListRick_V1', []);
  
  

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;
 
 return (
      <AppUI
      todos={todos}
      saveTodos={saveTodos}
      completedTodos={completedTodos}
      totalTodos={totalTodos}
      loading={loading}
      error={error}
      
      />
    
  );
}
export default App;
