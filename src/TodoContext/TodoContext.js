import React from 'react';

const TodoContext = React.createContext();


function TodoProvider(){
    //aqui encapsulas la logica de la app.

    return(
        <TodoContext.Provider>


        </TodoContext.Provider>
    );
}





export { TodoContext, TodoProvider };
