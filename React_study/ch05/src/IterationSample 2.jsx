function IteraitonSample2() {
    const names = ['눈사람', '얼음', '눈', '바람']
    const namelist = names.map((name, index) => <li key={index}>{ name}</li>)
    
    /*
    namelist =[<li key='0'>눈사람</li>,<li key='1'>얼음</li>,<li key='2'>눈</li>,<li key='3'>바람</li>] 
    key 
    */


    return <ul>{ namelist }</ul>;
}

export default IteraitonSample2;