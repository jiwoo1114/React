
import React, { useState } from "react";


function getAverage(numbers) {
    console.log('평균값 계산....')

    if (numbers.length === 0) return 0
    const sum = numbers.reduce((a, b) => a + b) //누적 합산 구하는 함수
    
    return sum / numbers.length
}


function UseMemoEx1() { 

    const [list, SetList] = useState([])
    const [number, SetNumber] = useState('')
    
    const OnChange = (e) =>  SetNumber(e.target.value) 
    
    const onInsert = () => {
        const NextList = list.concat(Number(number))
            SetList(NextList)
            SetNumber('')  
    }
    
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
                <b>평균값:{getAverage(list)} </b>
            </div>
        </>
    )
}

export default UseMemoEx1