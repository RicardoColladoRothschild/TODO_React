import React from 'react';
import { AddTaskComponent } from '../AddTaskComponent/AddTaskComponent';
import { TodoList } from '../TodoList/TodoList';
import './SubComponent.css';
function SubComponent({todos, setTodos, loading, error}){
     

   
    return (
        <div className="sub-component-container">
            <AddTaskComponent/>
            
            <TodoList/>
        </div>
    );
}

export { SubComponent };
