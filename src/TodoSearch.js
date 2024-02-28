import './TodoSearch.css';
function TodoSearch(){
    return (
        <input placeholder = "clases de TypeScript" 
        className="TodoSearch"
        onChange={(event)=>{
                console.log('Estas escribiendo en el todo, search');
                console.log(event);
                console.log(event.target);
                console.log(event.target.value);

 
        }
    }/>
    );
}

export { TodoSearch };
