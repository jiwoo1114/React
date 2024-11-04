import './CSS/Pocketmon.css'
import Monster from './images/몬스터볼.PNG'

function pocketmon({ children }) {
     return ( 
         <div className='PocketMonster'>
              {/*<children> => <pocketmon_insert/>,<pocketmon_list/> 컴포넌트*/}
               <div className='Pocketmon-title'>
                    <img src={Monster} alt="몬스터볼" />포켓몬스터 도감</div>
            <div className='content'>{children}</div>
        </div>
     );
}
 
export default pocketmon