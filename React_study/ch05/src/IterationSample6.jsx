
import React, {useState} from "react";


function IteraitonSample3() {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ])

    const [inputText, setInputText] = useState('')
    const [NextId, setNextId] = useState(5) //id를 만들어주는 state
    
    const namelist = names.map((name) => <li key={name.id} onDoubleClick={() => {onRemove(name.NextId)}}>{name.text}
    </li>)

    const onRemove = (id) => {
        const nextNames = names.filter((name) => {
            return name.id !== id
        })

        setNames(nextNames)
    }


    const onChange = (e) => { setInputText(e.target.value) }
    
    const onClick = () => { 
        const nextNames = names.concat(
            {
                id: NextId, //id:5
                text:inputText //사용자가 입력한 값
            }
        )

        setNames(nextNames) //names state를 합친 배열로 변경
        setNextId(NextId + 1) //다음에 데이터 추가시 ncxtId를 1씩 증가시키기 위해
        setInputText('') //input창에서 사용하는 state 값 초기화

    }
    

    return (
        <>
            <input type='text' value={inputText} onChange={onChange}></input>
            <button onClick={onClick}>추가</button>
            <ul>{namelist}</ul>
        
        
        </>
    )
}
export default IteraitonSample3;