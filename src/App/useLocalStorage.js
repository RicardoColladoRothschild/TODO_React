import React from 'react';

function useLocalStorage(itemName, initialValue) {

  const [item, setItem] = React.useState(initialValue);
  const [ loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);
  
  React.useEffect(()=>{
    setTimeout(()=>{

        try{
            
          const localStorageItem = localStorage.getItem(itemName);
          let parsedItem;
      
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(initialValue));
            parsedItem = initialValue;
          } else {
            
            parsedItem = JSON.parse(localStorageItem);
            setItem(parsedItem);
           
          }
          
          setLoading(false);

        }catch(error){
            setLoading(false);
            setError(true);
        }

    },3000);
    
  
  },[]);
  

  const saveItem = (newItem) => {
    localStorage.setItem(itemName, JSON.stringify(newItem));
    setItem(newItem);
  };

  return {item, saveItem, loading, error};
}

export { useLocalStorage };

//'TODOListRick_V1'

/*
  const defaultTodos = [

    {
      text:'Construir casa del arbol',
      completed:false
    },
     {
      text:'Viajar en bote',
      completed:false
    },
     {
      text:'Terminar tarea',
      completed:false
    },
     {
      text:'Ir al Gym',
      completed:true
    },
     {
      text:'Comer nutritivo',
      completed:false
    },
     {
      text:'Jugar Zelda',
      completed:true
    },
     {
      text:'Estudiar',
      completed:false
    },

  ]
*/

//localStorage.setItem('TODOListRick_V1', defaultTodos);
