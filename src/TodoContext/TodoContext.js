import React from 'react';
import { useLocalStorage } from '../App/useLocalStorage';
const TodoContext = React.createContext();


function TodoProvider({children}){
    //aqui encapsulas la logica de la app.
    const {item:todos, saveItem:saveTodos, loading, error} = useLocalStorage('TODOListRick_V1', []);
    
    const [openModal, setOpenModal] = React.useState(false);
  
  

    const completedTodos = todos.filter(todo => !!todo.completed).length;
    const totalTodos = todos.length;
   
   /*From TodoList:*/
   const [searchValue, setSearchValue] = React.useState(''); 
  
  function returnSearch(value){
    const findsearch = todos.filter((todo)=>{
      return todo && todo.text && todo.text.toLowerCase().includes(value.toLowerCase());

    });

    return findsearch;
  }

  function addTodo(todo){
    const newTodos = [...todos];
    newTodos.push({
      text:todo,
      completed:false
    });
      saveTodos(newTodos);
  }
  function deleteItem(text){

const estadoDerivado = todos.filter(todo=>todo.text !== text);
      
 saveTodos(estadoDerivado);
}

  let objectSearched = returnSearch(searchValue);  

  const completeTodo = (text)=>{
      const newTodos = [...todos];  
      const todoIndex = newTodos.findIndex(
        (todo) => todo.text ===text
      );
      newTodos[todoIndex].completed = true; 
      saveTodos(newTodos);
  }

    return(
        <TodoContext.Provider value={{
            todos,
            addTodo,
            saveTodos,
            loading,
            error,
            completeTodo,
            objectSearched,
            deleteItem,
            searchValue,
            setSearchValue,
            completedTodos,
            totalTodos,
            setOpenModal,
            openModal
        }}>

            {children}
        </TodoContext.Provider>
    );
}





export { TodoContext, TodoProvider };
