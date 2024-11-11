import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({
   name: 'todos',
   initialState: [],
   reducers: {
      addTodo: (state, action) => { 
         //redux 툴킷은 불변성을 유지하므로 push 사용 가능
          state.push({ id: Date.now(), text: action.payload } )
      },
      removeTodo: (state, action) => { 
         //filter는 배열의 값을 변경하는 게 아니라 조건에 맞게 출력하는 것이기 때문에 retrun을 해줘야함(안 하면 배열만 만들어짐)
         return state.filter((todo) => todo.id !== action.payload)
      }
   },
})

export default todoSlice
export const { addTodo, removeTodo } = todoSlice.actions
