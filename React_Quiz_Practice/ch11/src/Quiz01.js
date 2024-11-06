import React, { useReducer, useState } from 'react'

// 상태 초기값
const initialState = []

// 리듀서 함수
//state를 바꿔주는 함수
function reducer(state, action) {
   switch (action.type) {
      case 'add': 
         return [...state, {id:Date.now(), text: action.payload}]// 여기에 코드 작성
      case 'delete':
         return  state.filter((todo) => todo.id !== action.payload)// 여기에 코드 작성
      default:
         return state
   }
}

const Quiz01 = () => {
   //[state 값, dispath ]=(reducer로 사용할 함수 이름 , state 초기값)
   const [todos, dispatch] = useReducer(reducer, initialState)
   const [inputValue, setInputValue] = useState('')

   // 새로운 할 일 추가
   const handleAddTodo = () => {
      if (inputValue.trim()) {
         dispatch({ type: 'add', payload:  inputValue  })
         setInputValue('')
         //여기에 코드 작성
      }
   }

   // 할 일 삭제
   const handleDeleteTodo = (id) => {
      dispatch({ type: 'delete', payload: id})
      //여기에 코드 작성
   }

   return (
      <div>
         <h1>To-Do List</h1>
         <input type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} placeholder="할일 입력" />
         <button onClick={handleAddTodo}>추가</button>

         <ul>
            {todos.map((todo) => (
               <li key={todo.id}>
                  {todo.text} <button onClick={() => handleDeleteTodo(todo.id)}>삭제</button>
               </li>
            ))}
         </ul>
      </div>
   )
}

export default Quiz01
