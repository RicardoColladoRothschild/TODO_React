
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoForm.css';
export const TodoForm = () =>{

    const {
        setOpenModal,
        addTodo
        
    } = React.useContext(TodoContext);
    const [todoData, setTodoData] = React.useState('');

    function datahandler(event){
        setTodoData(event.target.value);
    }
    
    const cancelHandler = ()=>{
        setOpenModal(false);
    }

    const addTodoHandler = ()=>{
        addTodo(todoData);
        setOpenModal(false);
    }
return(
        <div className="add-newtodo-container">
            <label className="label-newtodo--container">Add a Todo</label>
           
            <textarea 
                onChange={(event)=>{
                    datahandler(event)
                
                 }} 
                 className="new-todo-form"
                 value={todoData}
                 placeholder="ejemplo: 'Comprar cafe'"
            />

            <div className="button-box-container">
                <button onClick={addTodoHandler} className="btn-box-container btn-add--newtask-container">add</button>
                <button onClick={cancelHandler} className="btn-box-container btn-cancel--newtask-container">cancel</button>
            </div>
        </div>
    );
}