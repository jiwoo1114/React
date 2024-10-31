import React, { useState } from 'react'

const Quiz01 = () => {
   const [form, setForm] = useState({
      val1: 0,
      val2: 0,
      val3: 0,
   })

   const { val1, val2, val3 } = form

   //input 입력창 값을 사용자가 입력한대로 수정하게 만드는 함수
   const onChange = (e) => {
      const nextForm = {
         ...form,
         [e.target.name]: e.target.value,
      }

      setForm(nextForm)
   }

   const onClick = () => {
      // 이 부분 작성

      alert(`더한 값:${Number(val1) + Number(val2) + Number(val3)}`)


      //value 값 초기화
      setForm({val1:0,val2:0,val3:0})
   }

   const onKeyDown = (e) => {
      if (e.key === 'Enter') {
         onClick()
      }
   }

   return (
      <div>
         <h1>이벤트 연습</h1>

         <input type="text" name="val1" value={val1} onChange={onChange} />

         <input type="text" name="val2" value={val2} onChange={onChange} />

         <input type="text" name="val3" value={val3} onChange={onChange} onKeyDown={onKeyDown} />

         <button onClick={onClick}>확인</button>
      </div>
   )
}

export default Quiz01
