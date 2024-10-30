import React, { useState } from 'react'

function Quiz07() {
  const [isON, setOFF] = useState(false)

  //초기값 false => OFF
  //Click 발생할 시 isON의 값이 반대로 됨(TRUE)
  //ON,OFF 번갈아서 발생
  return (
    <div>
      <p>{isON ? 'ON' :'OFF'}</p>
      <button onClick={() => setOFF(!isON)}>
        토글
      </button>
    </div>
  )
}

export default Quiz07;