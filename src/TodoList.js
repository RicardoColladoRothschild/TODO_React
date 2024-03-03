import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';
import { TodoSearch } from './TodoSearch';
import { defaultTodos } from './todosData';
function TodoList({todos, setTodos}){

  
  //const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); 

  //console.log('Los usuarios buscan un TODO de: ' + searchValue);
  
  function returnSearch(value){

    const findsearch = todos.filter((todo)=>{      
      return todo.text.toLowerCase().includes(value.toLowerCase());
    });    

    return findsearch;
  } 
  let objectSearched = returnSearch(searchValue); 
    return (
        <ul className="list-container">
            <TodoSearch 
              searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

                 {!searchValue?(
                      defaultTodos.map(todo =>(
                          <TodoItem 
                            key={todo.text}
                            todos = {todos}
                            setTodos = {setTodos}
                              text={todo.text}
                             completed={todo.completed}/>
                            )
                            )
                  ):(
                    objectSearched.map((todo)=>(
                      <TodoItem key={todo.text}
                      todos = {todos}
                      setTodos = {setTodos}
                      text={todo.text}
                       completed={todo.completed}/>
                    ))
                    
                    
                  )}


        </ul>
    );
}


export { TodoList };
