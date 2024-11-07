import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
   name: 'auth',
   initialState: { isAuthenticated: false },
   //state: { isAuthenticated: false } state.isAuthenticated = false
   reducers: {
      //action type login일 시 state의 값이 true로 바뀜
      login: (state) => { 
         state.isAuthenticated= true
      },
      //action type login일 시 state의 값이 false로 바뀜
      logout: (state) => {
         state.isAuthenticated = false       
      }
   },
})

export default authSlice //리듀서 밖으로 리턴
export const { login, logout } = authSlice.actions //액션값 리턴
