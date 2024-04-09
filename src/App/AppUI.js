import React from 'react';
import { MainComponent } from '../MainComponent/MainComponent';
import { SubComponent } from '../SubComponent/SubComponent';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoCounter } from '../TodoCounter/TodoCounter.js';
import './App.css';

function AppUI(){

   const {completedTodos, totalTodos} = React.useContext(TodoContext);
  
    return(
        <React.Fragment>
            <TodoCounter completed = {completedTodos} total = {totalTodos}/>
         <MainComponent>
          <SubComponent/>
         </MainComponent>
     
      </React.Fragment>

    );
}

export { AppUI };
