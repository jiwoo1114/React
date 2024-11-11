import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { addproduct,removeproduct } from "./productSlice"

function ProductList() { 
    const product = useSelector((state) => state.product) //store에 저장된 리듀서이름
    const dispatch = useDispatch()
    const [inputvalue, Setinputvalue] = useState('')
    
    //버튼 상품 추가할 이벤트함수
    const HandonClick = () => {
        if (inputvalue.trim()) {
            dispatch(addproduct(inputvalue))
            Setinputvalue('')
        }
    }

    return (
        <div>
            <input type="text" placeholder="상품명 입력" value={inputvalue} onChange={(e) => Setinputvalue(e.target.value)}></input>

            <button onClick={HandonClick}>상품추가</button>
            
            <ul>
                {product.map((pro) => {
                    //map 함수도 꼭 리턴해라....
                    return(
                    <li key={pro.id}>
                    {pro.text}
                    <button onClick={()=>dispatch(removeproduct(pro.id))}>상품 삭제</button>
                    </li>)
                 })}
            </ul>

        </div> 
    )
}

export default ProductList