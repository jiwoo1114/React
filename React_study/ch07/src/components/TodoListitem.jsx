import './css/TodoListitem.css'
import { MdRemoveCircleOutline, MdCheckBoxOutlineBlank, MdCheckBox } from "react-icons/md";
import classnames from 'classnames'



function TodoListitem({ todo,onRemove,onToggle }) {
    const { id, text, checked } = todo
    
    return (<div className='TodoListItem'>
        {/*checked:checkde =checkde 값이 true일 때 checked 클래스 생성*/ }
        <div className={classnames('checkbox', { checked })}
            onClick={() => {
                onToggle(id)
            }}
        >
            {checked ?  <MdCheckBox/>: < MdCheckBoxOutlineBlank/>}
            <div className='text'>{ text }</div>
        </div>
        <div className='remove' onClick={() => {onRemove(id)}}>
            <MdRemoveCircleOutline />
        </div>
    </div> );
}

export default TodoListitem;