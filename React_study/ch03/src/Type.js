const Type = (props) => {
    const { str, num, bool, arr, json, func } = props
    const result = func(1,2)

    //불,배열타입은 출력할 떄 .toString()붙혀주기
    return (
    <div>
        <p>StringProps:{str}</p>
        <p>NumberProps:{num}</p>
        <p>BoolProps:{bool.toString()}</p>
        <p>ArrProps:{arr.toString()}</p>
        <p>JSONProps:{JSON.stringify(json)}</p>
        <p>functionProps:{result}</p>
    </div>
)
}

export default Type