import React, { useState } from 'react'

function ReducerCounter1() {
   const [count, setCount] = useState(0)

   function down() {
      setCount(count - 1)
   }

   function reset() {
      setCount(0)
   }

   function up() {
      setCount(count + 1)
   }

   return (
      <>
         <input type="button" value="-" onClick={down} />
         <input type="button" value="0" onClick={reset} />
         <input type="button" value="+" onClick={up} />
         <span>{count}</span>
      </>
   )
}

export default ReducerCounter1
