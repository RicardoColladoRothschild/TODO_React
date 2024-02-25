import React from 'react';


import { MainComponent } from './MainComponent';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { AddTaskComponent } from './AddTaskComponent';
import { SubComponent } from './SubComponent';


function App() {
  return (
      <React.Fragment>
         <TodoCounter completed = {16} total = {25}/>

         <MainComponent>
          <SubComponent/>
          

         </MainComponent>
     
      </React.Fragment>
    
  );
}
export default App;
