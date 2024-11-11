function Chapter2() {

    const name = '지우'
    const style = {
        backgroundColor:'blue'
    }

    return (  
        //1.JSX문법은 태그가 2개 이상인 경우 무조건! 감싸주는 부모태그가 있어야함
        //2.{}로 자바스크립트 문법 사용가능
        //3. &&연산자와 ||연산자는 조건식으로도 사용가능(or,and 때랑 다름)
        //4.style 인라인태그는 json 객체 형식으로 적용가능:key는 카멜 형식으로 표현
        //5.밖에서 css 파일을 사용할 땐 ClassName으로 스타일지정
        //6.무조건 닫는태그가 있어야한다
        <div>
            <h1>리액트</h1>
             <p>{name}</p>
            {name === '지우' ? <p>지우입니다</p> : <p>지우가 아닙니다</p>}
            <p>{'리액트' && <h1>리액트입니다.</h1>}</p>
            <p>{'리액트' || <h1>리액트입니다.</h1>}</p>
            <p style={{style}}></p>
            
        </div>
    );
}

export default Chapter2
