import React, { useEffect } from 'react'

function Quiz01() {
   useEffect(() => {
      console.log('Effect triggered')
   }, [])

   return <div>Hello World</div>
}

   //맨 처음 렌더링 될 때만 콘솔에 찍힘 최초 실행 시 1번 실행
export default Quiz01
