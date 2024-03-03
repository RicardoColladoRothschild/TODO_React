import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';
import { TodoSearch } from './TodoSearch';
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

  function deleteItem(text){

     const estadoDerivado = todos.filter(todo=>todo.text !== text);
      console.log('Deleting: ' + text);
     setTodos(estadoDerivado);
         
   }
  let objectSearched = returnSearch(searchValue); 

  const completeTodo = (text)=>{
      const newTodos = [...todos];  
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text ===text
      );
      newTodos[todoIndex].completed = true; 
    setTodos(newTodos);
  }
    return (
        <ul className="list-container">
            <TodoSearch 
              searchValue={searchValue}
                setSearchValue={setSearchValue}
            />

                 {!searchValue?(
                      todos.map(todo =>(
                          <TodoItem 
                            key={todo.text}
                            todos = {todos}
                            setTodos = {setTodos}
                              text={todo.text}
                             completed={todo.completed}
                            deleteItem={()=>deleteItem(todo.text)}
                            onComplete={()=>completeTodo(todo.text)}/>
                            )
                            )
                  ):(
                    objectSearched.map((todo)=>(
                      <TodoItem key={todo.text}
                      todos = {todos}
                      setTodos = {setTodos}
                      text={todo.text}
                       completed={todo.completed}
                       deleteItem={()=>deleteItem(todo.text)}
                       onComplete={()=>completeTodo(todo.text)}/>
                    ))
                )}


        </ul>
    );
}
export { TodoList };
