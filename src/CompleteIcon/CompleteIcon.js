import { TodoIcon } from '../TodoIcon/TodoIcon';
function CompleteIcon({completed, onComplete}){
    return (
        <TodoIcon
            type="check"
            color={completed? "green": 'grey'}
            onClick={onComplete}
        />
    );
}

export { CompleteIcon };
