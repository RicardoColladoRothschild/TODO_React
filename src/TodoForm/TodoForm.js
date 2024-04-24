
import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoForm.css';
export const TodoForm = () =>{

    const {
        openModal,
        setOpenModal,
        
    } = React.useContext(TodoContext);
    const [todoData, setTodoData] = React.useState('');

    function datahandler(data){
        setTodoData(data);
    }
    
    const cancelHandler = ()=>{
        setOpenModal(false);
    }

    const addTodoHandler = ()=>{
        setOpenModal(false);
    }
return(
        <div className="add-newtodo-container">
            <label className="label-newtodo--container">Add a Todo</label>
           
            <textarea 
                onChange={(event)=>{
                    datahandler(event.target.value)
                
                 }} 
                 className="new-todo-form"
            />

            <div className="button-box-container">
                <button onClick={addTodoHandler} className="btn-box-container btn-add--newtask-container">add</button>
                <button onClick={cancelHandler} className="btn-box-container btn-cancel--newtask-container">cancel</button>
            </div>
        </div>
    );
}