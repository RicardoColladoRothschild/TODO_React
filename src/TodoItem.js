import './TodoItem.css';
function TodoItem(props){

    const style_TodoItem = {
      marginLeft:'8px'
    }


    function deleteItem(){
     const itemIndex = props.todos.indexOf();

      if(itemIndex !== -1){
          props.todos.splice(itemIndex);
          props.setTodos(props.todos);
      }
    }
    return (
      <li className="TodoItem">
        <span className={`Icon Icon-check ${props.completed  && "Icon-check--active"}`}>
          V
          </span> 
          <p className={`TodoItem-p ${props.completed  && "TodoItem-p--complete"} `} style={style_TodoItem}>
          {props.text}
          </p>
        
        <p className={`Icon Icon-delete`} 
          onClick={deleteItem()}
        >x</p>  
      </li>
      
    );
}

export { TodoItem };
