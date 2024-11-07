import { useSelector, useDispatch } from "react-redux"
import { useState } from "react"
import { addproduct,removeproduct } from "./productSlice"

function ProductList() { 
    const product = useSelector((state) => state.product)
    const dispatch = useDispatch()
    const [inputvalue,Setinputvalue] = useState('')

    return (
       <div>
            <input type="text" placeholder="상품명 입력" value={inputvalue} onChange={(e) => Setinputvalue(e.target.value)}></input>

            <button onClick={() => dispatch(addproduct(inputvalue))}>상품추가</button>
            
            <ul>
                {product.map((pro) => {
                    <li key={pro.id}>
                    {pro.text}
                    <button onClick={()=>dispatch(removeproduct(pro.id))}>상품 삭제</button>
                    </li>
                 })}
            </ul>

        </div> 
    )
}

export default ProductList