import './TodoItem.css';
function TodoItem(props){

    const style_TodoItem = {
      marginLeft:'8px'
    }
    return (
      <li className="TodoItem">
        <span className="Icon Icon-check Icon-chek--active">
          V
          </span> 
          <p calssName="TodoItem-p TodoItem-p--Complete" style={style_TodoItem}>
          {props.text}
          </p>
        
        <p className="Icon Icon-delete">x</p>  
      </li>
      
    );
}

export { TodoItem };
