import './Button.css';
function CreateTodoButton({setOpenModal}){


    function createTodoEventHandle(event){

        setOpenModal(true);
    }
    return (
        <button className="createTodoButton"
        onClick={createTodoEventHandle}
        >+
        </button>
    );
}


export { CreateTodoButton };
