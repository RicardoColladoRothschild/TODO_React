import React from 'react';
import { CreateTodoButton } from '../CreateTodoButton/CreateTodoButton';
import { Modal } from '../Modal/Modal';
import { TaskImagen } from '../TaskImagen/TaskImagen';
import { TodoContext } from '../TodoContext/TodoContext';
import './AddTaskComponent.css';

import { TodoForm } from '../TodoForm/TodoForm';
function AddTaskComponent(){
    const {openModal, setOpenModal} = React.useContext(TodoContext);
    return (
        <div>
            <div className="newtask-container">
            <input placeholder="Comprar cafe"/>
             <CreateTodoButton
                setOpenModal={setOpenModal}
                openModal={openModal}
                
             />
             {openModal &&
                 <Modal>
                     <TodoForm/>
                 </Modal>}
            </div>
            
             <TaskImagen/>
        </div>
        
    );
}

export { AddTaskComponent };
