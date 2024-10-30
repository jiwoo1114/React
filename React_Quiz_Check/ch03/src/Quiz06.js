import React, { useState } from 'react'

function Quiz06() {
    const [count, ClickCount] = useState(0)
    

    //button value 초기값 =0
    //클릭이벤트 발생 시 button value(0)이 1씩 증가.
        return (  
        <div>
            <p>카운트:{count} </p>
                <button value={count} onClick={(e) => {
                    console.log(e)
                    ClickCount(++e.target.value)
                }}>
                1씩 증가
            </button>
        </div>
    );
}

export default Quiz06;