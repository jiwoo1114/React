function Quiz03(props) { 

    const { name, age =21, phone, children } = props
    
    return (
        <div>
            <h2>학생정보</h2>
            <ul>
                <li>{ name }</li>
                <li>{ age }</li>
                <li>{ phone }</li>
                <li>{ children }</li>
            </ul>
        </div>
    )
}

export default Quiz03