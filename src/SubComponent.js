import React from 'react';
import { AddTaskComponent } from './AddTaskComponent';
import './SubComponent.css';
import { TodoList } from './TodoList';
function SubComponent(props){
    const [searchValue, setSearchValue] = React.useState(''); 

    console.log('Los usuarios buscan un TODO de: ' + searchValue);
    return (
        <div className="sub-component-container">
            <AddTaskComponent/>
            <TodoList/>
        </div>
    );
}

export { SubComponent };
