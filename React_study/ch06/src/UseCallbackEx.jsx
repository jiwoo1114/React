
import React, { useState,useMemo,useCallback } from "react";


function getAverage(numbers) {
    console.log('평균값 계산....')

    if (numbers.length === 0) return 0
    const sum = numbers.reduce((a, b) => a + b) //누적 합산 구하는 함수
    
    return sum / numbers.length
}


function UseMemoEx2() { 

    const [list, SetList] = useState([])
    const [number, SetNumber] = useState('')
    
    //컴포넌트가 처음 렌더링 될 때만 함수 생성
    const OnChange = useCallback(((e) =>  SetNumber(e.target.value),[] ))
    
    //listState에 입력한 값 추가
    const onInsert = useCallback (() => {
        const NextList = list.concat(Number(number))
            SetList(NextList)
            SetNumber('')  
    },[number,list] ) //numver 혹은 list state가 변경 될 때 함수 생성
    
    //list state가 바뀔때만 getAverage(list)함수가 실행된다.
    //setList가 실행되는 OnInsert 함수(버튼클릭 시) 변경
    const avg = useMemo(() =>  getAverage(list),[list])

    return (
        <>
            <input type="text" value={number} onChange={OnChange}/>
            <button onClick={onInsert}>등록</button>
            <ul>
                {
                    list.map((value, index) => 
                        (
                            <li key={index}>{value}</li>
                        ))
                }
            </ul>
            <div>
                <b>평균값:{avg} </b>
            </div>
        </>
    )
}

export default UseMemoEx2