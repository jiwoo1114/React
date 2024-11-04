import React, { useState,useCallback} from "react";
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";
import { useRef } from "react";

function App() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '헬스장 가기',
      checked: true,
    },
    
    {
      id: 2,
      text: '점심약속',
      checked: true,
    },

     {
      id: 3,
      text: '리액트복습',
      checked: false,
    },
  ])

  //ref 사용시 컴포넌트 재렌더링X 다른 state에 바뀌면서 재렌더링이 되어도 값이 변경되지X
  const nextId = useRef(4) //고유값으로 사용될 Id,ref를 사용하여 변수 담기
  
  //할일 등록하는 함수
  const onInsert = useCallback((text) => {
    const todo = {
        id: nextId.current, //ref의 값 가져오기 값:4
        text,//text: text,
        checked:false
    }
    setTodos(todos.concat(todo))
    nextId.current += 1 //nextId를 1씩 더하기
  }, [todos]) //todos의 값이 바뀔 때만 함수실행
  

  //할 일을 삭제하는 함수
  const onRemove = useCallback((id) => {
    const removedTodos = todos.filter((todo) => todo.id !== id)
    setTodos(removedTodos)
  },[todos])

  //할 일 완료,미완료 토글 함수

  const onToggle = useCallback( (id) => {
    const toggleTodos = todos.map((todo) => todo.id === id ?
      {
      ...todo,
      checked: !todo.checked, //checke 값을 덮어쓴다(원래의 값에서 반대)
    } : todo
    )
    
      setTodos(toggleTodos)
  },[todos]
)


  return (
    <TodoTemplate>
      {/* 컴포넌트를 Children props로 전달 */}
      {/*TodoInsert 컴포넌트에 onInsert 함수 전달*/ }
      <TodoInsert onInsert={ onInsert } />
      {/* todos는 TodoListItem 컴포넌트에서 사용하므로 props로 전달 */ }
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} /> 
    </TodoTemplate>
  );
}

export default App;
