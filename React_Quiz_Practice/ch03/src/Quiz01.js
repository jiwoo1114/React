import App from './App.css'




function Quiz01(props) {

    const { rain, wind, temp, children }  = props
    return(
    <div>
            <p>오늘은{ children }</p>
            <p>오늘의 강수확률은{ rain }</p>
            <p>오늘의 풍속은{wind}</p>
            <table>
                <tr>
                    <th>시간</th>
                    <th>온도</th>
                </tr>
                <tr>
                    <th>오전</th>
                    <th>{temp.morning}°C</th>
                </tr>
                <tr>
                    <th>오후</th>
                    <th>{temp.afternoon}°C</th>
                </tr>
                <tr>
                    <th>저녁</th>
                    <th>{temp.evening}°C</th>
                </tr>
            </table>
    </div>
    )
}

export default Quiz01
