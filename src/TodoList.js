import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';
import { TodoSearch } from './TodoSearch';
import { defaultTodos } from './todosData';
function TodoList(props){

  
  //const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState(''); 


  //const completedTodos = todos.filter(todo => !!todo.completed).length;


  //const totalTodos;


  console.log('Los usuarios buscan un TODO de: ' + searchValue);

    return (
        <ul className="list-container">
            <TodoSearch 
              searchValue={searchValue}
              setSearchValue={setSearchValue}
            />
                {defaultTodos.map(todo =>(
                   <TodoItem key={todo.text}
                     text={todo.text}
                     completed={todo.completed}/>
                 ))}
        </ul>
    );
}

export { TodoList };
