import './CSS/Pocketmon_Insert.css'; 
import React, {useState} from 'react';
//import { IoMdAddCircle } from "react-icons/io";
import 'bootstrap/dist/css/bootstrap.min.css';
//부트스트랩 리액트
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FaSearchPlus } from "react-icons/fa";
//import { Button,InputGroup,Form} from 'react-bootstrap';


function Pocketmon_Insert({ onInsert }) {
    const [value, Setvalue] = useState('')
    const onChange = (e) => Setvalue(e.target.value)
    
    const onClick = (e) => {
        e.preventDefault() //서버 재로딩 막음

        

        onInsert(value) //Props로 전달 된 Insert 함수 value=name 매개변수
        Setvalue('')
    }
    
    return ( 
 
        <InputGroup size="lg" className="mb-3 PocketMon_Insert">
            <Form.Control
            onChange={onChange}
          placeholder="포켓몬의 이름을 검색하세요"
          aria-label="Large"
          aria-describedby="inputGroup-sizing-sm"
            />
            {/*포켓몬 추가버튼*/ }
            <Button variant="outline-secondary" id="button-addon2" type='submit' onClick={onClick}>
          <FaSearchPlus />
        </Button>
      </InputGroup>

     );
}

export default Pocketmon_Insert;