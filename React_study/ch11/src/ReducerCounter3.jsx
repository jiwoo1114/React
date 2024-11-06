import React, { useReducer,useState } from "react";

function ReducerCounter3() {

    //[state 값, dispath ]=(reducer로 사용할 함수 이름 , state 초기값)
    const [count, CountDispath] = useReducer(countReducer, 0)
    const [number,SetNumber] = useState(1)
    
    //reducer 함수: 직접 state를 변경한다(회계직원 역할)
    function countReducer(oldCount, action) {
                console.log(action)
        {/* (현재 state,dispath에 전달받은 action)*/ }
        if (action.type === 'UP') {
            return oldCount + action.number //return 실행 시 state가 업데이트
        } else if (action.type === 'RESET') {
            return 0
        } else if (action.type=== 'DOWN'){
            return oldCount - action.number
        }

    }

    const ChangeNumber = (e) =>SetNumber(Number(e.target.value))
    
    //dispath 함수:이벤트가 발생시  reducer 함수를 실행시키고 action을 전달(창구직원역할)
    //dispath에서 매개변수가 2개 이상의 값을 전달하고 싶을 땐 json 객체 형태로 전달
    const down = () => CountDispath({type:'DOWN',number:number})
    const reset = () =>  CountDispath({type:'RESET',number:number})
    const up =  () => CountDispath({type:'UP',number:number})


    return (  
        <>
        <input type="button" value="-" onClick={down} />
        <input type="button"  value="0" onClick={reset}/>
         <input type="button" value="+" onClick={up} />
        <input type="text" value={number} onChange={ChangeNumber}/>
            
        <p>카운트:{count}</p>
        </>
    );
}

export default ReducerCounter3;

