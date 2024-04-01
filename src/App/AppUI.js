import React from 'react';
import { MainComponent } from '../MainComponent/MainComponent';
import { SubComponent } from '../SubComponent/SubComponent';
import { TodoCounter } from '../TodoCounter/TodoCounter.js';
import './App.css';
import {TodoContext} from '../TodoContext/TodoContext';

function AppUI({todos, saveTodos,completedTodos, totalTodos, loading, error}){

    
  
    return(
        <React.Fragment>
            <TodoContext.Consumer>
                {({completedTodos, totalTodos})=>(
                    <TodoCounter completed = {completedTodos} total = {totalTodos}/>
                )}
            </TodoContext.Consumer>
         

         <MainComponent>
          <SubComponent
           todos = {todos}
            setTodos = {saveTodos}
            loading={loading}
            error={error}/>
          

         </MainComponent>
     
      </React.Fragment>

    );
}

export { AppUI };
