import React from 'react';
import { AddTaskComponent } from './AddTaskComponent';
import './SubComponent.css';
import { TodoList } from './TodoList';
function SubComponent({todos, setTodos}){
    const [searchValue, setSearchValue] = React.useState(''); 

    console.log('Los usuarios buscan un TODO de: ' + searchValue);
    return (
        <div className="sub-component-container">
            <AddTaskComponent/>
            <TodoList todos = {todos} setTodos = {setTodos}/>
        </div>
    );
}

export { SubComponent };
