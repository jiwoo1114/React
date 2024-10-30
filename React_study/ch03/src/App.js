//import export해주는 걸 어떤 이름으로 사용할건지(export 이름과 똑같이 사용하길 권장) from 파일경로
//import Mycomponent from "./MyComponent"

//import Type from "./Type"

/* function App() { 
  //리액트는 숫자형은 중괄호 후 전달해야함.
  return (
    <Mycomponent name='하서' job='강사' forNumber="1">맑음</Mycomponent>
  )
}

export  default App*/

//함수를 밖에서 분리해도 ㅇㅋ
/*const func =(a,b)=>{return a+b}

function App() {
  return <Type str='react'
    num={200}
    bool={1 == 1}
    arr={[0, 1, 2]}
    json={{ react: '리액트', time: 2 }}
    func={func} ></Type>
} */

import InputText from "./InputText"
import Say from "./Say"

function App() { 
  // return <Say/>
  return <InputText/>
}

export default App