import React from 'react';
import './App.css';
import { AppUI } from './AppUI.js';
import { useLocalStorage } from './useLocalStorage.js';
//'TODOListRick_V1'

/*
  const defaultTodos = [

    {
      text:'Construir casa del arbol',
      completed:false
    },
     {
      text:'Viajar en bote',
      completed:false
    },
     {
      text:'Terminar tarea',
      completed:false
    },
     {
      text:'Ir al Gym',
      completed:true
    },
     {
      text:'Comer nutritivo',
      completed:false
    },
     {
      text:'Jugar Zelda',
      completed:true
    },
     {
      text:'Estudiar',
      completed:false
    },

  ]
*/

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
