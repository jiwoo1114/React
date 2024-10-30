function Quiz04(props) {

    const { major, grade, start } = props
    const [value1,value2,value3,value4,value5,value6] = grade
    return (
        <div>
            <h2>{major} 성적</h2>
            <h3>개강여부:{start.toString()}</h3>
            <ul>
                <li>{value1}</li>
                <li>{value2}</li>
                <li>{value3}</li>
                <li>{value4}</li>
                <li>{value5}</li>
                <li>{value6}</li>
            </ul>
        </div>
    )
}

export default Quiz04;