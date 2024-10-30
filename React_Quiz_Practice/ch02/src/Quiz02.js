function Quiz02() {
  /* const rain = 0
   1.rain이 0일 때 경우

   return (
      <div>
         <p>오늘의 날씨는 맑음입니다.</p>
         <p>오늘의 강수확률은 {rain === 0?'없음':rain+'%'}입니다.</p>
      </div>
   )*/
   
   const rain = 30

   //rain이 0이 아닐 때 경우 

   return (
      <div>
         <p>오늘의 날씨는 맑음입니다.</p>
         <p>오늘의 강수확률은{rain === 0?'없음':rain+'%'} 입니다.</p>
      </div>
   )
}

export default Quiz02
