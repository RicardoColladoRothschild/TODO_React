import React from 'react';
import { MainComponent } from '../MainComponent/MainComponent';
import { SubComponent } from '../SubComponent/SubComponent';
import { TodoCounter } from '../TodoCounter/TodoCounter.js';
import './App.css';
import { useLocalStorage } from './useLocalStorage';

//'TODOListRick_V1'



//localStorage.setItem('TODOListRick_V1', defaultTodos);
function App() {
   

  const [todos, saveTodos] = useLocalStorage('TODOListRick_V1', []);

  const completedTodos = todos.filter(todo => !!todo.completed).length;
  const totalTodos = todos.length;

  
  return (
      <React.Fragment>
         <TodoCounter completed = {completedTodos} total = {totalTodos}/>

         <MainComponent>
          <SubComponent todos = {todos} setTodos = {saveTodos}/>
          

         </MainComponent>
     
      </React.Fragment>
    
  );
}
export default App;
