import todoReducer from "./todoReducer"; //리듀서 함수 끌어오기
import { createStore } from 'redux' 

//store에 리듀서 저장
const store = createStore(todoReducer)

export default store
