import React from 'react';
import { TodoContext } from '../TodoContext/TodoContext';
import './TodoSearch.css';
function TodoSearch(){
    
    const {searchValue, setSearchValue} = React.useContext(TodoContext);

    return (
        <input placeholder = "clases de TypeScript" 
        className="TodoSearch"
        value={searchValue}
        onChange={(event)=>{
                setSearchValue(event.target.value); // actualizamos el estado con lo que haya en value
                 
        }
    }/>
    );
}

export { TodoSearch };
