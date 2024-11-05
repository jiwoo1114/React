import './AppNavLink.css'


import { Routes, Route, NavLink } from 'react-router-dom'




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

 
function App() {
  return (
    <div>
      <h1>리액트 라우터</h1>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
       <li>
           <NavLink to='/Topics'>Topics</NavLink>
      </li>
       <li>
           <NavLink to='/Concat'>Concat</NavLink>
      </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/topics' element={<Topics />} />
        <Route path='/concat' element={<Concat />} />

        {/*지정한 경로 외의 경로는 Not Found를 나타낸다*/ }
        <Route path='/*' element={'Not Found'}></Route>
      </Routes>
    </div>
   
  );
}

export default App;
