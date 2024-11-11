import Chapter3 from "./Chapter3";
import Chapter6 from './Chapter6';
import Chapter9 from "./Chapter9";

function App() { 
  //props:부모컴포넌트에 데이터 값 지정
  //json 객체형태로 전달
  //함수는 분리형태나 jsom 객체로 바로 전달할수 있음
  //const func = (a,b) => {return a+b }
  //return <Chapter3 name='지우' num={100} arr={[1, 2, 3]} json={{ react: '리액트' }} func={ func } />

  //<Chapter6 />
  <Chapter9/>
}

export default App