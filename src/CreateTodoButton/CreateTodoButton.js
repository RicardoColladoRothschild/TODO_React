import './Button.css';
function CreateTodoButton({setOpenModal, openModal}){


    
    return (
        <button className="createTodoButton"
        onClick={()=>{
            setOpenModal(state=>!state);
        }}
        >+
        </button>
    );
}


export { CreateTodoButton };
