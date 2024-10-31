
import React, {useState} from "react";


function IteraitonSample3() {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ])
    const namelist = names.map((name) => <li key={name.id}>{name.text }</li>)
    
    /*
    namelist =[<li key='0'>눈사람</li>,<li key='1'>얼음</li>,<li key='2'>눈</li>,<li key='3'>바람</li>] 
    key 
    */


    return <ul>{ namelist }</ul>;
}

export default IteraitonSample3;