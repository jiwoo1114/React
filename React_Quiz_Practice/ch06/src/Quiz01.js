import React, { useState, useEffect } from 'react'

const Quiz01 = () => {
   const [seconds, setSeconds] = useState(0)
   const [isRunning, setIsRunning] = useState(false)

   useEffect(() => {

      console.log('타이머 클릭')
      let timerId
      //1초마다 시간 흘러가게 하기
      if (isRunning) {
         timerId = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1)
         }, 1000)
      }

      return () => {
         console.log('타이머 실행 중...')
         clearInterval(timerId)
      }
   }, [isRunning]) //isRunning state가 바뀔 때만 렌더링 후 코드 실행

   const startTimer = () => {
      setIsRunning(true)
      //여기에 코드 작성
   }

   const stopTimer = () => {
      setIsRunning(false)
      //여기에 코드 작성
   }

   return (
      <div>
         <p>타이머: {seconds} 초</p>
         <button onClick={startTimer} disabled={isRunning}>
            시작
         </button>
         <button onClick={stopTimer} disabled={!isRunning}>
            정지
         </button>
      </div>
   )
}

export default Quiz01
