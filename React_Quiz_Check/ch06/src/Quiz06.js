import React, { useState,useCallback } from 'react'

function Quiz06() {
   const [count, setCount] = useState(0)

   
   const increment = useCallback(() => {
      //prevState(직전의 State 상태)
      //0 -> 0+1 =1 (함수재실행) 1 -> 1+1 =2
      setCount((prevState) => prevState + 1)
    }, [])
   
    /*
   한번 증가하고 증가 X => 함수가 한번만 생성되므로 count state의 바뀐값을 적용하지 X
   const increment = useCallback(() => {
      setCount(count + 1)
   }, [])

    */

   /*
   혹은 

   const increment = useCallback(() => {
      setCount(count + 1)
   }, [count])

   */


   return (
      <div>
         <p>Count: {count}</p>
         <button onClick={increment}>Increment</button>
      </div>
   )
}

export default Quiz06
