import React from 'react';
import { defaultTodos } from './todosData';

import './App.css';
import { MainComponent } from './MainComponent';
import { SubComponent } from './SubComponent';
import { TodoCounter } from './TodoCounter';

//localStorage.setItem('TODOListRick_V1', defaultTodos);
function App() {
  const localStorageTodos = localStorage.getItem('TODOListRick_V1');
  let parsedTodos;
    if(!localStorageTodos){
      localStorage.setItem('TODOListRick_V1', JSON.stringify([]));
      parsedTodos=[];
    }else{

      parsedTodos = JSON.parse(localStorageTodos);
    }

   

  const [todos, setTodos] = React.useState(parsedTodos);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  
  return (
      <React.Fragment>
         <TodoCounter completed = {completedTodos} total = {totalTodos}/>

         <MainComponent>
          <SubComponent todos = {todos} setTodos = {setTodos}/>
          

         </MainComponent>
     
      </React.Fragment>
    
  );
}
export default App;
