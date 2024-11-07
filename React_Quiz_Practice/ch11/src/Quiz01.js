import React, { useReducer, useState } from 'react'

// 상태 초기값
const initialState = []

// 리듀서 함수
//state를 바꿔주는 함수
function reducer(state, action) {
   //state: 현재 state값(todos)
   //action: dispath에서 전달한 매개변수 값 =>{type: 'add', payload:'저녁먹기'}
   //저녁먹기 삭제할 때 action => {type: 'delete', payload:'2024-11-07 10:50:12'} 저녁먹기를 제외한 배열이 출력
   switch (action.type) {
      case 'add': // ...state:꼭 깊은복사를 해야 기존의데이터 유지하며 추가 가능 
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
         //action을 받음,매개변수 2개 이상이어 json 객체로 받음
         //dispath의 역할: action 전달,reducer 호출 
         dispatch({ type: 'add', payload: inputValue })
         setInputValue('')
         //여기에 코드 작성
      }
   }

   // 할 일 삭제
   const handleDeleteTodo = (id) => {
      //action를 받음
      dispatch({ type: 'delete', payload: id })
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
