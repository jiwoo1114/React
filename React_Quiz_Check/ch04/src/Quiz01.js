import React, { useState } from 'react'

function Quiz01() {

   const [form, setForm] = useState(
      {
         username:'',
         message: '',
         email:'',
      })
   
   const { username, message, email } = form

   //버튼클릭시 알림창이 뜨게 하는 함수
  const onClick = () => {
      alert(`입력값:${username}, ${message} , ${email}`,)

      setForm({username:'',message:'',email:''})
   }

   //엔터 눌렀을 때 이벤트 일어나게 설정하는 함수 

   const onKeyDown = (e) => {
        console.log(e.key)

        if (e.key === 'Enter') {
            onClick()
        }
    }
   

     const onChange = (e) => {
        // form state 안에 있는 값들을 바꿔줘야 한다.
        const nextForm = {
            ...form,
            [e.target.name]:e.target.value,
        }
          setForm(nextForm)
       }



   return (
      <div>
         <h1>이벤트 연습</h1>
         <input type="text" name="username" placeholder="이름 입력" value={username} onChange={onChange} onKeyDown={onKeyDown} />
         <input type="text" name="message" placeholder="메시지 입력" value={message} onChange={onChange} onKeyDown={onKeyDown}/>
         <input type="text" name="email" placeholder="이메일 입력" value={email} onChange={onChange} onKeyDown={onKeyDown} />
         <button onClick={onClick}>확인</button>
      </div>
   )
}

export default Quiz01
