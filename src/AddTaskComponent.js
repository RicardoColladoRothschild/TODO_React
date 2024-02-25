import './AddTaskComponent.css';
import { CreateTodoButton } from './CreateTodoButton';
import { TaskImagen } from './TaskImagen';
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
