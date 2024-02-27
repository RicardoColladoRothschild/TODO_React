import { TodoItem } from './TodoItem';
import './TodoList.css';
import { TodoSearch } from './TodoSearch';
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
    return (
        <ul className="list-container">
            <TodoSearch />
                {defaultTodos.map(todo =>(
                   <TodoItem key={todo.text}
                     text={todo.text}
                     completed={todo.completed}/>
                 ))}
        </ul>
    );
}

export { TodoList };
