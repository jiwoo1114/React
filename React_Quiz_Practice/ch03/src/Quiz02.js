import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import React, { useState } from 'react'

function Quiz02() {
   //이미지에 대한 이벤트
   const [display, setDisplay] = useState
      ('none')
   //이름(P태그)에 대한 이벤트
   const [name, setName] = useState
   ('이상해씨')
   return (
      <div>
         <img src={step1} width="150" style={{display: name === '이상해씨'?'block':'none'} } />
         <br />
         <img src={step2} width="150" style={{display}} />
         <br />
         <p>{name}</p>
         <button onClick={() => {
            setDisplay('block')
            setName('이상해풀')
         }}>이상해씨 다음은?</button>
      </div>
   )
}

export default Quiz02
