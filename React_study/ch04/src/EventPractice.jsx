import React, { useState } from 'react';

function EventPractice() {
    const [username, setUsername] = useState('')
    const [message, setMessage] = useState('')
    
    //input창에 입력한 값을 state 값으로 적용 
    const onChangeUsername = (e) => setUsername(e.target.value)
    const onChangeMessage = (e) => setMessage(e.target.value)

    const onClick = () => {
        //사용자가 input창에 입력한 state 값을 출력
        alert(`첫번쨰 입력값:${username}, 두번째 입력값:${message}`)
        //state 값 초기화(input 창의 value도 사라짐 )
        setUsername('')
        setMessage('')
    }

    //엔터를 눌렀을 때 onClick() 실행
    const onKeyDown = (e) => {
        console.log(e.key)

        if (e.key === 'Enter') {
            onClick()
        }
    }
    
    return ( 
        <div>
            <h1>이벤트연습</h1>
            <input type="text" name="user" placeholder='아무거나 입력' value={username} onChange={onChangeUsername} />

            <input type="text" name="user" placeholder='아무거나 입력' value={message} onChange={onChangeMessage} onKeyDown={onKeyDown} />
            
            {/*disablie를 이용해서 첫번째,두번째 인풋창 모두 입력이 되어있을 때만 버튼 활성화*/ }
            <button onClick={onClick} disabled={!username || !message}>확인</button>
        </div>
     );
}

export default EventPractice;