import './CSS/Pocketmon_Insert.css'; 
import React, {useState} from 'react';
import { IoMdAddCircle } from "react-icons/io";

function Pocketmon_Insert({ onInsert }) {
    const [value, Setvalue] = useState('')
    const onChange = (e) => Setvalue(e.target.value)
    
    const onSubmit = (e) => {
        e.preventDefault() //서버 재로딩 막음

        

        onInsert(value) //Props로 전달 된 Insert 함수 value=name 매개변수
        Setvalue('')
    }
    
    return ( 
 
        <div class="input-group mb-3">
        <form action="#" className='.PocketMon_Insert' onSubmit={onSubmit}> 
        <input type="text" classNme="form-control" placeholder="포켓몬의 이름을 입력하세요" value={value} onChange={onChange} aria-describedby="button-addon2"/>
        <button className="btn btn-outline-secondary" type="submit" id="button-addon2">< IoMdAddCircle /></button>
        </form>
      </div>
      

     );
}

export default Pocketmon_Insert;