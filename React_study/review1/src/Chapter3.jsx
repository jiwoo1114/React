import React, {useState,useCallback} from "react";

//const {name,num,arr,json,func} = props
    // props는 비구조화 할당방식으로 전달받는게 제일편리함.
    //매개변수에 비구조화 할당식 적는게 제일 자주씀

function Chapter3({ name, num, arr, json, func }) {
    const [text, SetText] = useState('')
    
    //state가 바뀌면 컴포넌트가 처음부터 다시 실행됨(재렌더링 된단 말씀)
    //useCallback:함수 재생성 방지 컴포넌트 최적화(컴포넌트 안에 있는 함수들)

    const onChange = useCallback((e) => SetText(e.target.value),[])
    
    return ( 
        <div>
            <p>{name}</p>
            {/* 매개변수 있는 함수는 요렇게 표현하면 됨.... */ }
            <p>{func(1, 2)}</p>
            <p>{arr.map((num) => num)}</p>

            <input type="text" onChange={onChange} />
        </div>
     );
}

export default Chapter3;