import React, { useState } from "react";

//useState - state가 여러개일 경우
function Chapter4() {
    const [form, setForm] = useState({
        username: '',
        message:''
    })
    
    //...form(깊은복사:form에 있는 데이터를 복사)
    //[변수명]:식 변수명을 key값으로 사용
    const onChange = (e) => {
        const Nextform = {
            ...form,
            [e.target.name]: e.targe.value
        }
        setForm(Nextform)
    }

    return ( 
        <>
        <input type="text" name="username" value={username} onChange={onChange}/>
        <input type="text" name="message" value={message} onChange={onChange}/>
        </>
     );

}

export default Chapter4 ;