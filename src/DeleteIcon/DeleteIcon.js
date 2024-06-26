import { TodoIcon } from '../TodoIcon/TodoIcon';
function DeleteIcon({onDelete}){
    return (
        <TodoIcon
            type="delete"
            color="black"
            onClick={onDelete}
        />
    );
}

export { DeleteIcon };
