import React, { useCallback, useState } from 'react'

function Quiz02_1() {
   const [items, setItems] = useState([])
   const [text, setText] = useState('')

   const handleChange = useCallback((event) => setText(event.target.value),[])

   const handleSubmit = useCallback((event) => {
      event.preventDefault()
      //배열에 사용자가 입력한 값(text) 추가해 새로운 배열 생성
      setItems([...items, text])
      setText('')
      //items 배열과 text가 변경될 때만 함수 실행
   },[items,text])

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
