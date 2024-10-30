import React, { useState } from 'react'
function Quiz08() {

  const [fontSize, setFontSize] = useState("15px")

  //input 창의 value가 변경될 때 이벤트발생
  //value에 px값을 적을 시 변경 된 px값이 p 태그의 스타일에 적용됨
  return (
    <div>
      <input type="text" onChange={(e) => setFontSize(e.target.value)} />
      <p style={{fontSize}}>귤은 비타민 C를 포함하고 있어 감기에 좋습니다.</p>
    </div>
  );
}

export default Quiz08;