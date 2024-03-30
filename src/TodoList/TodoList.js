import React from 'react';
import { EmptyTodos } from '../EmptyTodos';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import './TodoList.css';

function TodoList({todos, setTodos, loading, error, searchedTodos}){

  
  //const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); 
  
  function returnSearch(value){
    const findsearch = todos.filter((todo)=>{
      return todo.text.toLowerCase().includes(value.toLowerCase());
    });

    return findsearch;
  }

  const saveTodos = (newTodos) =>{
    localStorage.setItem('TODOListRick_V1', JSON.stringify(newTodos));
  
  setTodos(newTodos);
}

  function deleteItem(text){

const estadoDerivado = todos.filter(todo=>todo.text !== text);
      
 saveTodos(estadoDerivado);
}
  let objectSearched = returnSearch(searchValue);  

  const completeTodo = (text)=>{
      const newTodos = [...todos];  
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text ===text
      );
      newTodos[todoIndex].completed = true; 
      saveTodos(newTodos);
  }
const totalTodos = todos.length;


    return (
        <ul className="list-container">
            <TodoSearch 
              searchValue={searchValue}
                setSearchValue={setSearchValue}
            />
            {loading && <TodosLoading/>}
            {error && <TodosError/>}
            {(!loading && totalTodos === 0) && <EmptyTodos/>}

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
