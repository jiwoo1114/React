import React, {useState,useRef} from "react";
import { useCallback } from "react";

function Chapter5() {
    const [names, setNames] = useState([
        { id: 1, text: '눈사람' },
        { id: 2, text: '얼음' },
        { id: 3, text: '눈' },
        { id: 4, text: '바람' },
    ])

    const [inputText, setInputText] = useState('')
    //const [NextId,setNextId] = useState(5)
    const NextId = useRef(5) //dom을 직접 건드림
    
    
    const onChange = useCallback((e) => setInputText(e.target.value), [])
    
    const onClick = useCallback(() => {
        //concat 함수:원래 있던 리스트,배열 값을 수정하지않고(불변성) 새로운 값을 추가
        const Nextnames = names.concat({
            id: NextId,
            text: inputText
        })
        setNames(Nextnames)
        //ref의 값을 가져옴 
        NextId.current += 1
        setInputText('')
    }, [names]) //names가 변경될 때만 컴포넌트 재렌더링

    const onRemove = useCallback((id) => {
        const Nextnames = names.filter((name) => name.id == !id)
        setNames(Nextnames)
    }, [names])

    //컴포넌트 반복 주로 map함수를 사용(리턴 꼭 하셈~~)
    const namelist = names.map((name) => <li key={name.id} onDoubleClick={() => { onRemove(name.NextId) }}>
        {name.text}
    </li>)
    return (
        <>  
            <ul> {namelist}</ul>
            <input type="text" value={inputText} onChange={onChange} />
            <button onClick={onClick}></button>
        </>
    )
}

export default Chapter5;