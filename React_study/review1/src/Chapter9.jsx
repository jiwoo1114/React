import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { useParams } from 'react-router-dom';

function Home() { 
  return (
    <div>
      <h2>Home</h2>
      Home..
      </div>
      )
}

function Topics() { 
  return (
    <div>
      <h2>Topics</h2>
      Topics..
      </div>
      )
}


function Concat() { 
  return (
    <div>
      <h2>Concat</h2>
      Concat..
      </div>
      )
}



function PathTest() { 
  return (
    <div>
      <h2>PathTest</h2>
      PathTest
      </div>
      )
}


 
function App() {
    //링크를 걸 때 a 대신 NavLink로 한다~~
    //NavLink 특징: 현재 들어와있는 링크에 class:active 부여 각 컴포넌트 들어갈 때마다 스타일 줄 수 있음
    //파라미터 부분 예를 들어 /user/1 이면 1 부분이 동적 파라미터
    
    const User = () => {
        // URL에서 동적 파라미터인 pathpara를 가져옴 /user/1이면 ///1출력
        const { userId } = useParams(); 
        
        return (
            <div>
                <h1>리액트 라우터</h1>
                <ul>
                    <li>
                        <NavLink to='/'>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to='/topics'>topics</NavLink>
                    </li>
                    <li>
                        <NavLink to='/concat'>concat</NavLink>
                    </li>
                    <li>
                        <NavLink to='/test/1'>PathTest</NavLink>
                    </li>
              
                    <li>
                        <NavLink to='/test/2'>PathTest</NavLink>
                    </li>
                </ul>

                <Routes>
                    { /* path가 ~일 때 element에 지정된 컴포넌트를 보여주겠다. */}
                    {  /*localhost:3000/ => Home 컴포넌트*/}
                    <Route path='/' element={<Home />} />
                    {  /*localhost:3000/topics => topic 컴포넌트*/}
                    <Route path='/topics' element={<Topics />} />
                    {  /*localhost:3000/concat => concat 컴포넌트*/}
                    <Route path='/concat' element={<Concat />} />
                    {  /*localhost:3000/test/뭐가올지 모름 => PathTest 컴포넌트*/}
                    <Route path='/test/:path_para' element={<Concat />} />
              

                    {/*지정한 경로 외의 경로는 Not Found를 나타낸다,위에서 지정한 경로 제외 다른 경로*/}
                    {/* /*= 슬래시 뒤에 어떠한 경로가 와도 된다는 걸 표시 */}
                    <Route path='/*' element={'Not Found'}></Route>
                </Routes>
            </div>
   
        );
    }
}

export default App;
