
import React, {useState} from "react";


function IteraitonSample3() {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ])

    const [inputText, setInputText] = useState('')
    
    const namelist = names.map((name) => <li key={name.id}>{name.text}</li>)


    const onChange = (e) => { setInputText( e.target.value)}
    

    return (
        <>
            <input type='text' value={inputText} onChange={onChange}></input>
            <ul>{namelist}</ul>
        
        
        </>
    )
}
export default IteraitonSample3;