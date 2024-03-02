import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';
import { TodoSearch } from './TodoSearch';
import { defaultTodos } from './todosData';
function TodoList(props){

  
  //const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); 

  //console.log('Los usuarios buscan un TODO de: ' + searchValue);
  let objectSearched = returnSearch(searchValue);
  
    return (
        <ul className="list-container">
            <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />

                 {!searchValue?(
                      defaultTodos.map(todo =>(
                          <TodoItem key={todo.text}
                              text={todo.text}
                             completed={todo.completed}/>
                            )
                            )
                  ):(
                    <TodoItem key={objectSearched.text}
                    text={objectSearched.text}
                     completed={objectSearched.completed}/>
                    
                  )}


        </ul>
    );
}
/*TODO:
El parametro que recibimos, value, no debe ser undefined, al retonar. El problema es que, en 
nuestra busquecda ene l array, estamos buscando un elemento que sea "identico", durante las primeras
letras que el usuario ha digitado, no va  a ser igual. */
function returnSearch(value){

      
    const findsearch = defaultTodos.find((todo)=>{
      console.log('Running find method, current value: ' + value);
      console.log(todo.text + ' | ' + todo.completed);
      return todo.text.toLowerCase() === value.toLowerCase();
    });
    if(!findsearch){
      return {text:value}
    }

    return findsearch;
}

export { TodoList };
