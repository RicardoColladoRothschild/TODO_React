import './Button.css';
function CreateTodoButton({setOpenModal, openModal}){


    function createTodoEventHandle(event){
            
        if(!openModal){
            setOpenModal(true);
            
        }else{
            setOpenModal(false);
        }
        
    }
    return (
        <button className="createTodoButton"
        onClick={createTodoEventHandle}
        >+
        </button>
    );
}


export { CreateTodoButton };
