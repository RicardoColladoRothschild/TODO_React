import React from 'react';


import { MainComponent } from './MainComponent';
import { TodoCounter } from './TodoCounter';
import { TodoItem } from './TodoItem';
import { TodoList } from './TodoList';
import { TodoSearch } from './TodoSearch';
import { AddTaskComponent } from './AddTaskComponent';

const defaultTodos = [
  {
    text:'React Course',
    completed:false
  },
  {
    text:'Create base code',
    completed:false
  },
  {
    text:'Organazi data base',
    completed:true
  },
  {
    text:'Build components',
    completed:false
  },
  {
    text:'Practice what you learned',
    completed:false
  }
];

function App() {
  return (
      <React.Fragment>
         <TodoCounter completed = {16} total = {25}/>

         <MainComponent>
            <AddTaskComponent/>
            <TodoList>
         
              <TodoSearch />
                {defaultTodos.map(todo =>(
                   <TodoItem key={todo.text}
                     text={todo.text}
                     completed={todo.completed}/>
                 ))}
        
              </TodoList>

         </MainComponent>
     
      </React.Fragment>
    
  );
}
export default App;
