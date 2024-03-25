import React from 'react';
import { AddTaskComponent } from '../AddTaskComponent/AddTaskComponent';
import { TodoList } from '../TodoList/TodoList';
import './SubComponent.css';
function SubComponent({todos, setTodos, loading, error}){
    const [searchValue, setSearchValue] = React.useState(''); 

   
    return (
        <div className="sub-component-container">
            <AddTaskComponent/>
            
            <TodoList
             todos = {todos}
             setTodos = {setTodos}
             loading={loading}
             error={error}/>
        </div>
    );
}

export { SubComponent };
