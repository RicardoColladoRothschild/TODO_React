import React from 'react';
import { TodoItem } from './TodoItem';
import './TodoList.css';
import { TodoSearch } from './TodoSearch';
const defaultTodos = [
    {
      text:'React Course',
      completed:true
    },
    {
      text:'Create base code',
      completed:false
    },
    {
      text:'Organizar data base',
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
function TodoList(props){
  const [searchValue, setSearchValue] = React.useState(''); 

  console.log('Los usuarios buscan un TODO de: ' + searchValue);

  const result = defaultTodos.filter((element)=>{
      return element.text === searchValue
    
  });

    console.log(`Resultados era: ` + result.text);

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
