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
        <form className="PocketMon_Insert" onSubmit={onSubmit}>
            <input type="text" placeholder="이름 검색" value={ value } onChange={onChange} />
            <button type="submit">
                <IoMdAddCircle />
            </button>
        </form>
     );
}

export default Pocketmon_Insert;