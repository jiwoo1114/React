
import './App.css';
import React, { useState } from 'react';
import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux'

//reducer: state를 바꿔주는 역할
function reducer(currentState, action) {
  //currentState가 정의되지 않을 때
  if (currentState === undefined) {
    return { number: 1 } //state 값을 업데이트
  }


  const newState = { ...currentState}

  if (action.type === 'PLUS') {
    newState.number++ //number의 값 증가
  }
  //currentState가 정의가 되었을 떄 state가 업데이트 되는 부분
  return newState
}

//store:reducer, state를 저장하는 창고 //1을 저장
const store = createStore(reducer)


function Left1(props) {
  return <div>
    <h1>Left1:</h1>
    <Left2 ></Left2>
  </div>
}

function Left2() {
  return <div>
    <h1>Left2:</h1>
    <Left3 ></Left3>
  </div>
}



function Left3() {
 // function f(state) {
  //  return state.number
  //}

  //useSelector:state 값을 무선연결해서 가져오기 위한 함수
  //state = {number: 1}
  //처음 사이트에 접속 시 useSelector에서 reducer를 실행시켜서 값을 가져온다
  const number = useSelector((state) => state.number)

  return <div>
    <h1>Left3:{number}</h1>
  </div>
}

function Right1() { 
  return (
    <div>
      <h1>Right1</h1>
      <Right2></Right2>
    </div>
  )
}

function Right2() { 
  return (
    <div>
      <h1>Right2</h1>
      <Right3></Right3>
    </div>
  )

}

function Right3() { 
  const dispatch = useDispatch()
  return (
    <div>
      <h1>Right3</h1>
      <input type='button' value="+" onClick={() => {
        dispatch({ type: 'PLUS' })
      }}></input>
    </div>
  )

}
function App() {
  return (
    <div className='container'>
      <h1>Root:</h1>
      <div className='grid'>
        {/*Provider: store에 저장된 reducer,state를 제공하는 역할을 한다. 제공하는 컴포넌트를 감싸주면 된다. */}
        {/*Left1, Rigth1  컴포넌트에서 store에 저장된 reducer와 state를 사용할 수 있다.*/ }
        <Provider store={store}>
        <Left1 ></Left1>
        <Right1></Right1>
        </Provider>
        
      </div>
    </div>
  );
}

export default App;
