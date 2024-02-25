import { AddTaskComponent } from './AddTaskComponent';
import './SubComponent.css';
import { TodoList } from './TodoList';
function SubComponent(props){
    return (
        <div className="sub-component-container">
            <AddTaskComponent/>
            <TodoList/>
        </div>
    );
}

export { SubComponent };
