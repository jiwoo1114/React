import step1 from './images/step1.jpg'
import step2 from './images/step2.jpg'
import step3 from './images/step3.jpg'
import React, { useState } from 'react'

function Quiz04() {

   const [displayStates, setDisplaystates] = useState({
         
      display1: 'block',
      display2: 'none',
      display3: 'none',
      level: 1, //진화단계
   })
   
   //진화
    const evolve = (display, levelVal) => {
      setDisplaystates({
         display1: 'none',
         display2: 'none',
         display3: 'none',
      })
      //prevState:현재 State를 가져온다
      setDisplaystates((prevState) => {
         return {
            ...prevState,
            [display]: 'block',
            level: levelVal,

         }
      })
   } 





   return (
      <div>
         <img src={step1} width="150" style={{ display: displayStates.display1 }} />
         
         <img src={step2} width="150" style={{ display: displayStates.display2 }} />
         
         <img src={step3} width="150" style={{display:displayStates.display3}} />

         <br />

         {displayStates.level === 1 && <button onClick={() => evolve('display2',2) }>이상해씨 진화!</button>}
         {displayStates.level === 2 && <button onClick={() => evolve('display2', 3)}>이상해풀 진화!</button>}
         {displayStates.level === 3 &&  <button>진화 끝!</button>}
      </div>
   )
}

export default Quiz04
