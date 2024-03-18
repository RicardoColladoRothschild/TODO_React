import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { TaskImagen } from '../TaskImagen/TaskImagen';
import './AddTaskComponent.css';
function AddTaskComponent(){
    return (
        <div>
            <div className="newtask-container">
            <input placeholder="Comprar cafe"/>
             <CreateTodoButton/>
            </div>
            
             <TaskImagen/>
        </div>
        
    );
}

export { AddTaskComponent };
