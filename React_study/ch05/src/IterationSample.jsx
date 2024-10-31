function IteraitonSample() {
    const names = ['눈사람', '얼음', '눈', '바람']
    const namelist = names.map((name) => {
        //컴포넌트 리턴
        return (
            <li>{name}</li>
        )
    })
    
    /*
    namelist =[<li>눈사람</li>,<li>얼음</li>,<li>눈</li>,<li>바람</li>] 
    */


    return <ul>{ namelist }</ul>;
}

export default IteraitonSample;