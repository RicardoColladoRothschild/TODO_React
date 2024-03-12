import React from 'react';
import { AddTaskComponent } from '../AddTaskComponent/AddTaskComponent';
import { TodoList } from '../TodoList/TodoList';
import './SubComponent.css';
function SubComponent({todos, setTodos}){
    const [searchValue, setSearchValue] = React.useState(''); 

   
    return (
        <div className="sub-component-container">
            <AddTaskComponent/>
            <TodoList todos = {todos} setTodos = {setTodos}/>
        </div>
    );
}

export { SubComponent };
