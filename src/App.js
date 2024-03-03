import React from 'react';
import { defaultTodos } from './todosData';

import './App.css';
import { MainComponent } from './MainComponent';
import { SubComponent } from './SubComponent';
import { TodoCounter } from './TodoCounter';


function App() {

  const [todos, setTodos] = React.useState(defaultTodos);
  const completedTodos = todos.filter(todo => !!todo.completed).length;  
  const totalTodos = todos.length;

  
  return (
      <React.Fragment>
         <TodoCounter completed = {completedTodos} total = {totalTodos}/>

         <MainComponent>
<<<<<<< HEAD
          <SubComponent todos={todos} setTodos={setTodos}/>
=======
          <SubComponent todos = {todos} setTodos = {setTodos}/>
>>>>>>> searchTodo/Feature_#02
          

         </MainComponent>
     
      </React.Fragment>
    
  );
}
export default App;
