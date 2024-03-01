import React from 'react';
import './TodoSearch.css';
function TodoSearch(props){
    
    return (
        <input placeholder = "clases de TypeScript" 
        className="TodoSearch"
        value={props.searchValue} // acutalizamos el campo input value a lo que haya en el estado del componente
        onChange={(event)=>{
                props.setSearchValue(event.target.value); // actualizamos el estado con lo que haya en value
                

 
        }
    }/>
    );
}

export { TodoSearch };
