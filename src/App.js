import React from 'react';
import { defaultTodos } from './todosData';

import './App.css';
import { MainComponent } from './MainComponent';
import { SubComponent } from './SubComponent';
import { TodoCounter } from './TodoCounter';

//'TODOListRick_V1'
function useLocalStorage(itemName, initialValue){
    

  const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItem;


    if(!localStorageItem){
      localStorage.setItem(itemName, JSON.stringify(initialValue));
      parsedItem=initialValue;
    }else{

      parsedItem = JSON.parse(localStorageItem);
    }

    

    const [item, setItem] = React.useState(parsedItem);

    const saveItem = (newItem) =>{
      localStorage.setItem(itemName, JSON.stringify(newItem));
      setItem(newItem);
   };

    return[item, saveItem];
}


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
