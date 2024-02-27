function TodoItem(props){
    return (
      <li> 
        {props.text}
        <span>x</span>
      </li>
    );
}

export { TodoItem };
