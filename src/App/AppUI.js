import React from 'react';
import { MainComponent } from '../MainComponent/MainComponent';
import { SubComponent } from '../SubComponent/SubComponent';
import { TodoCounter } from '../TodoCounter/TodoCounter.js';
import './App.css';
import {TodoContext} from '../TodoContext/TodoContext';

function AppUI(){

   const {completedTodos, totalTodos} = React.useContext(TodoContext);
  
    return(
        <React.Fragment>
            <TodoCounter completed = {completedTodos} total = {totalTodos}/>
         <MainComponent>
          <SubComponent
           />
         </MainComponent>
     
      </React.Fragment>

    );
}

export { AppUI };
