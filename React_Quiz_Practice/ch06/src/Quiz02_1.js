import React, { useCallback, useState } from 'react'

function Quiz02_1() {
   const [items, setItems] = useState([])
   const [text, setText] = useState('')

   const handleChange = useCallback((event) => setText(event.target.value),[])

   const handleSubmit = useCallback((event) => {
      //서버에 전송하는 것을 막아줌 
      event.preventDefault()
      //배열[...items]에 사용자가 입력한 값(text) 추가해 새로운 배열 생성
      setItems([...items, text])
      setText('')
      //items 배열과 text가 변경될 때만 함수 실행
   }, [items, text]) //Items와 text state를 함수 내부에서 read해서 사용하므로 items와 text state가 바뀔 때 함수가 재생성 되도록 한다.

   return (
      <div>
         <form onSubmit={handleSubmit}>
            <input type="text" value={text} onChange={handleChange} />
            <button type="submit">추가</button>
         </form>
         <ul>
            {items.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   )
}

export default Quiz02_1
