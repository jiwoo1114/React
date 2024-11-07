import { useSelector, useDispatch } from 'react-redux'
import { login, logout } from './authSlice'

function AuthStatus() {
   //false 
   const isAuthenticated = useSelector((state) => state.auth.isAuthenticated) //state의 값은 false
   const dispatch = useDispatch()

   return (
      <div>
         {/*state의 값이 true일 때 로그인이 완료되었습니다 창 띄우기*/}
         {/*그러면 이제 로그아웃을 해야하니 action 값 logout dispatch에 부여*/}
         {/*버튼을 누를 시 onClick 이벤트 발생해서 state값 false로 바뀜*/ }
          {isAuthenticated ? (
            <div>
               <p>로그인이 완료되었습니다!</p>
               <button onClick={() => dispatch(logout())}>로그아웃</button>
            </div>
         ) : (
            <div>
               <p>로그인하세요!</p>
               <button onClick={() => dispatch(login())}>로그인</button>
            </div>
         )}
      </div>
   )
}

export default AuthStatus
