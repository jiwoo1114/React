import './css/TodoInsert.css'
import { IoMdAddCircleOutline } from "react-icons/io";
import React, {useState,useCallback} from 'react';

//입력창 부분
function TodoInsert({ onInsert }) {
    const [value, Setvalue] = useState('')
    const onChange = useCallback( (e) => Setvalue(e.target.value))
    
    //<button type="submit">을 눌렀을 때 실행되는 이벤트함수
    //input창에서 입력한 값 등록
    const onSubmit =useCallback((e) => {
        //submit 이벤트는 브라우저에서 새로고침을 발생시킴 -> 이를 방지하기 위해 사용

        e.preventDefault()

        onInsert(value) //props로 전달받은 onInsert 함수 실행
        Setvalue('') //value 값 초기화
     },[value,onInsert] //onInsert는 useCallback으로 정의된 함수이며 todos state에 의존한다. 즉, todos가 변경 될 때마다 onInsert함수도 새로 만들어지므로(바뀌므로) 사용
)

    //form-submit 버튼 태그 사용 시 엔터키 눌러도 작동
    return (<form className='TodoInsert' onSubmit={onSubmit}>
        <input placeholder='할 일을 입력하세요.' value={value} onChange={onChange} />
        <button type='submit'>
            <IoMdAddCircleOutline/>
        </button>
    </form>
    );
}

export default TodoInsert;