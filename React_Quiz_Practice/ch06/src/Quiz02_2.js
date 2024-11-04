import React, { useMemo, useState } from 'react'

const Quiz02_1 = ({ numbers }) => {
   //numbers = [0,1,2,3]
   // filter, reduce 사용하여 홀수만 필터링하고 그 합계를 계산한 후 useMemo로 처리합니다.
   //const oddSum =
   const oddSum = useMemo(() => { 
      console.log('Calculating odd numbers sum...')
      //홀수를 필터링하는 코드
      //reducd((a,b) => a+b) ->누적연산하는 함수
      //numbers가 변경 될 때만 함수가 실행
      return numbers.filter((num) => num % 2 !== 0).reduce((acc, cure) => acc + cure)
   }, [numbers]) //props인 numbers가 바뀔 때만 함수 실행
   
   //변수 따로 생성 시
   //const oddsumResult = useMemo(() => oddsum(),[numbers])

   return (
      <div>
         <p>주어진 숫자 배열: {numbers.join(', ')}</p>
         <p>홀수의 합계: {oddSum}</p>
      </div>
   )
}

export default Quiz02_1
