
import './css/TodoTemplate.css'

//전체적인 부분
//매개변수에 props 꼭 적기!
function TodoTemplate({children}) {
    //children => <TodoInsert/>,<TodoList/> 컴포넌트 
    return ( 
        <div className='TodoTemplate'>
            <div className='app-title'>TODO LIST</div>
            <div className='content'>{children}</div>
        </div>
     );
}

export default TodoTemplate;