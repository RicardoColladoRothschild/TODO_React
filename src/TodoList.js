import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';
import { TodoSearch } from './TodoSearch';
function TodoList({todos, setTodos}){

  
  //const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); 

  console.log('Los usuarios buscan un TODO de: ' + searchValue);
  const searchedTodos = todos.filter(
    (todo)=>{
        return todo.text.toLowerCase().includes(searchValue.toLowerCase());
    }
  );
    return (
        <ul className="list-container">
            <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
                {searchedTodos.map(todo =>(
                   <TodoItem key={todo.text}
                     text={todo.text}
                     completed={todo.completed}/>
                 ))}
        </ul>
    );
}

export { TodoList };
