import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';
function TodoItem(props){

    const style_TodoItem = {
      marginLeft:'8px'
    }


    
    return (
      <li className="TodoItem">
        <CompleteIcon 
        completed={props.completed}
        onComplete={props.onComplete}/>
       
          <p className={`TodoItem-p ${props.completed  && "TodoItem-p--complete"} `} style={style_TodoItem}>
          {props.text}
          </p>
        
          <DeleteIcon
          onDelete={props.deleteItem}
          />
          
      </li>
      
    );
}

export { TodoItem };
