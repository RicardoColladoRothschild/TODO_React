import React from 'react';
import { EmptyTodos } from '../EmptyTodos';
import { TodoContext } from '../TodoContext/TodoContext';
import { TodoItem } from '../TodoItem/TodoItem';
import { TodoSearch } from '../TodoSearch/TodoSearch';
import { TodosError } from '../TodosError';
import { TodosLoading } from '../TodosLoading';
import './TodoList.css';

/*PROPS THAT WERE NEEDED IT BEFORE AND SHOULD BE HERE BY THE CONTEXT:
{todos, setTodos, loading, error, searchedTodos, objectSearch}
*/
function TodoList(){
 
  //const [todos, setTodos] = React.useState(defaultTodos);
  

    return (
      <TodoContext.Consumer>
        {({
          searchValue,
          setSearchValue,
          loading,
          error,
          totalTodos,
          todos,
          setTodos,
          deleteItem,
          completeTodo,
          objectSearched
        })=>(
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
        )}
      </TodoContext.Consumer>
       
    );
}
export { TodoList };
