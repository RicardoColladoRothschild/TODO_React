import React from 'react';
import './TodoSearch.css';
function TodoSearch({
    searchValue,
    setSearchValue
}){
    
    return (
        <input placeholder = "clases de TypeScript" 
        className="TodoSearch"
        value={searchValue} // acutalizamos el campo input value a lo que haya en el estado del componente
        onChange={(event)=>{
                setSearchValue(event.target.value); // actualizamos el estado con lo que haya en value
                 
        }
    }/>
    );
}

export { TodoSearch };
