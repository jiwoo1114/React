// state: 컴포넌트 내부에서 사용하는 바뀌는 값을 저장하는 것
import React, { useState } from 'react'

function Say() {
    //state가 바뀌면 컴포넌트가 리렌더링이 되고 funtion안의 소스코드가 다시 실행된다,
    console.log('리렌더링 시작')
    /*
    1.useState 선언
    const [state 값을 저장할 변수, state 값을 바꿀 함수] = useState(초기 state 값)
    */
    const [message, setMessage] = useState('초기값')
    const[color,setColor] = useState('yellow')
    
    //컴포넌트 내부에서 사용하는 함수들은 컴포넌트 function 안에 작성
    const onClickEnter = () => { 
        //setMessage(바꾸고 싶은 값)
        setMessage('안녕하세요')
    }
    const onClickLeave = () => { 
        setMessage('안녕히 가세요')
    }

    const onClickred = () => setColor('red') 
    const onClickgreen = () => setColor('green') 
    const onClickblue= () => setColor('blue') 

    //<button onClick={() => setColor('blue')> 함수를 내부에서도 가능
        
    return (
        <div>
            <button onClick={ onClickEnter }>입장</button>
            <button onClick={ onClickLeave }>퇴장</button>
            <h1 style={{ color }}>{message}</h1>
            <button onClick={ onClickred }>빨강</button>
            <button onClick={ onClickgreen }>초록</button>
            <button onClick={onClickblue}>파란</button>
        </div>
    )
        
    
}

export default Say