import React from 'react';
import { MainComponent } from '../MainComponent/MainComponent';
import { SubComponent } from '../SubComponent/SubComponent';
import { TodoCounter } from '../TodoCounter/TodoCounter.js';
import './App.css';


function AppUI({todos, saveTodos,completedTodos, totalTodos}){

    
  
    return(
        <React.Fragment>
         <TodoCounter completed = {completedTodos} total = {totalTodos}/>

         <MainComponent>
          <SubComponent todos = {todos} setTodos = {saveTodos}/>
          

         </MainComponent>
     
      </React.Fragment>

    );
}

export { AppUI };
