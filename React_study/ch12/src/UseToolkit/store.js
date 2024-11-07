import { configureStore } from "@reduxjs/toolkit";
import counterSlice from './counterSlice' //countersSlice.reducer (리듀서를 가져옴)
import userSlice from './userSlice'

//reducer 저장
//reducer:{Slice 키로 지정할 key값:Slice의 이름}
const store = configureStore({
    reducer: {
        counter: counterSlice,
        user:userSlice
    }
})

export default store //store를 내보냄