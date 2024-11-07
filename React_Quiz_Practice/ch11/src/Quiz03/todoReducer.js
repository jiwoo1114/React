// state 초기값
const initialState = {todos:[]}


function todoReducer(state = initialState, action) {
    //action = {type:'addTodo', payload:'운동하기'}
    switch (action.type) { 
        case 'addTodo':
            //json 객체 깊은복사,[]의 값 깊은복사
            //{todos:[]} 복사
            //todos:[{id:2024-11=07-12-04,text:운동하기}] 복사
            return { ...state, todos: [...state.todos, { id: Date.now(), text:action.payload}] }
        case 'deletTodo':
            return {...state,todos : state.todos.filter((todo) => todo.id !== action.payload)}
        default:
            return state

    }
   
}

export default todoReducer;