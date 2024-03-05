import { CompleteIcon } from './CompleteIcon';
import { DeleteIcon } from './DeleteIcon';
import './TodoItem.css';
function TodoItem(props){

    const style_TodoItem = {
      marginLeft:'8px'
    }


    
    return (
      <li className="TodoItem">
        <CompleteIcon />
        {/** <span className={`Icon Icon-check ${props.completed  && "Icon-check--active"}`}
          onClick={props.onComplete}
        >
          V
          </span> */}
          <p className={`TodoItem-p ${props.completed  && "TodoItem-p--complete"} `} style={style_TodoItem}>
          {props.text}
          </p>
        
          <DeleteIcon/>
          {/** <p className={`Icon Icon-delete`} 
          onClick={props.deleteItem}
        >x</p>*/}
      </li>
      
    );
}

export { TodoItem };
