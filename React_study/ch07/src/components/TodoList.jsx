import './css/TodoList.css'
import TodoListItem from './TodoListitem';

//map함수로 App.js의 todos state(props로 전달) 배열 항목 출력
function TodoList({todos, onRemove,onToggle}) {
    return ( 
        <div className='TodoList'>
            {todos.map((todo) => (
                <TodoListItem todo={todo} key={todo.id} onRemove={onRemove} onToggle={onToggle} />
         ))}
        </div>
     );
}

export default TodoList;