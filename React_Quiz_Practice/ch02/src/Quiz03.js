function Quiz03() {
   const weather = '흐림'
   /*const rain = 0

   1.rain이 0일 경우 연산자 사용
   //a가 0으로 false여서 || 사용시 b를 출력

   return (
      <div>
         <p>오늘의 날씨는 맑음입니다.</p>
         <p>오늘의 강수확률은{rain||'없음'} 입니다.</p>
      </div>
   )*/
   
    const rain = 30

   //2.rain이 0이 아닐 때 경우 연산자 사용 
   //a가 true여서 ||사용시 a를 출력
   
   return (
      <div>
         <p>오늘의 날씨는 맑음입니다.</p>
         <p>오늘의 강수확률은{rain||'없음'} 입니다.</p>
      </div>
   )
}

export default Quiz03
