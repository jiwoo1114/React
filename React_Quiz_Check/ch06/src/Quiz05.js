import React, { useMemo, useState } from 'react'

function Quiz05() {
   const [number, setNumber] = useState(0)
   const [color, setColor] = useState('blue')

   //color state가 바뀌면서 컴포넌트가 재렌더링이 되고 isEven() 함수가 다시 실행된다
   const isEven = () => {
      console.log('Calculating...')
      return number % 2 === 0
   }


   //number(iuput에 사용자가 입력하는 값)가 바뀔 때만 재렌더링 
   const even = useMemo(() => isEven(),[number] )
   
   return (
      <div>
         <input type="text" value={number} onChange={(e) => setNumber(Number(e.target.value))} />
         <p style={{ color }}>입력한 숫자는 {even ? '짝수' : '홀수'}입니다.</p>
         <button
            onClick={() => {
               setColor('red')
            }}
         >
            red
         </button>
         <button
            onClick={() => {
               setColor('green')
            }}
         >
            green
         </button>
      </div>
   )
}

export default Quiz05
