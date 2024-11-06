import React, { useState } from "react";

function ReducerCounter1() {
    const [count,SetCount] = useState(0)

    const down = () => SetCount(count-1)
    const reset = () => SetCount(0)
    const up =  () => SetCount(count+1)


    return (  
        <>
        <input type="button" value="-" onClick={down} />
        <input type="button"  value="0" onClick={reset}/>
        <input type="button" value="+" onClick={up} />
            
        <p>카운트:{count}</p>
        </>
    );
}

export default ReducerCounter1;

