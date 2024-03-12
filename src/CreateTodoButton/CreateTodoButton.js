import './Button.css';
function CreateTodoButton(){
    return (
        <button className="createTodoButton"
        onClick={
            (event)=>{
                  
                    console.log(event);
                    console.log("Has hecho click en agregar, y esto esta en el componente CreateTodoButton");
                }
        }
        >+
        </button>
    );
}


export { CreateTodoButton };
