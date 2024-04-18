
import './TodoForm.css';
export const TodoForm = () =>{

return(
        <div className="add-newtodo-container">
            <label>Add a Todo</label>
            <input className="new-todo-form"/>
            <div className="button-box-container">
                <button className="btn-box-container btn-add--newtask-container">add</button>
                <button className="btn-box-container btn-cancel--newtask-container">cancel</button>
            </div>
        </div>
    );
}