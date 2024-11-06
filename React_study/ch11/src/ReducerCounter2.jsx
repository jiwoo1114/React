import React, { useReducer } from "react";

function ReducerCounter2() {

    //[state 값, dispath ]=(reducer로 사용할 함수 이름 , state 초기값)
    const [count, CountDispath] = useReducer(countReducer, 0)
    
    //reducer 함수: 직접 state를 변경한다(회계직원 역할)
    function countReducer (oldCount, action) {
        {/* (현재 state,dispath에 전달받은 action)*/ }
        if (action === 'UP') {
            return oldCount + 1 //return 실행 시 state가 업데이트
        } else if (action === 'RESET') {
            return 0
        } else if (action === 'DOWN'){
            return oldCount - 1
        }

    }
    
    //dispath 함수:이벤트가 발생시  reducer 함수를 실행시키고 action을 전달(창구직원역할)
    const down = () =>  CountDispath('DOWN')
    const reset = () =>  CountDispath('RESET')
    const up =  () => CountDispath('UP')


    return (  
        <>
        <input type="button" value="-" onClick={down} />
        <input type="button"  value="0" onClick={reset}/>
        <input type="button" value="+" onClick={up} />
            
        <p>카운트:{count}</p>
        </>
    );
}

export default ReducerCounter2;

