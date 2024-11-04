import Pocketmon_listitem from "./Pocketmon_listitem";
import './CSS/Pocketmon_list.css' 

function Pocketmon_list({Pockets, onRemove, onToggle}) {
    //Pockets 요소 빼기
    return ( 
        <div className="Pocketmon_list">
            {Pockets.map((Pocket) =>( <Pocketmon_listitem Pocket={Pocket} key={Pocket.id} onRemove={onRemove} onToggle={onToggle} />) ) }
        </div>

     );
}

export default Pocketmon_list;