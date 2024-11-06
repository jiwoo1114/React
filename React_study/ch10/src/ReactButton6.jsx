import styled from 'styled-components'

//Styled-components는 스타일이 있는 컴포넌트(변수명 대문자)
//벡틱 안에 css를 작성 (css코드와 똑같이 작성)
const StyledButton = styled.button`
    color:white;
    background-color:green;
`
//감싸기 기능을 이용해서 StyledButton의 성질을 그대로 가져온다.
const LargeButton = styled(StyledButton)`
    font-size: 50px;
`
//리액트 전통방식으로 만든 컴포넌트
const ReactButton = (props) => {
    console.log(props)
    return <button className={props.className}>{ props.children }</button>
}
//일반 컴포넌트를 감싸기 -> 기본스타일 적용안됨
//props.className을 적어주면 해결 완료~
const ReactLargeButton = styled(ReactButton)`
          font-size: 50px;
`
/*
 &는 현재 컴포넌트를 의미한다
 가상클래스(:hover, :focus, :active)나 가상요소(::before, ::after 등 )와
 결합하여 특정 요소나 상태에 스타일을 적용시킬 수 있다.
*/

//Primary 요소 이용해서 스타일 적용 
const PrimaryButton = styled.button`
 color:${(props) => (props.primary ? 'white' : 'blue') };
 background-color:${(props) => (props.primary ? 'orange' : 'skyblue') };
 font-size:${(props) => props.size || '10px'};

 &:hover{
     background-color: ${(props) => (props.primary ? 'darkblue' : 'darkgray')};
   }
 }
 
`
//세미콜론 빼먹지 마셈
/*const PrimaryButton = styled.button`
 color:${(props) => { 
    //두번째 noraml 버튼 props.primary = true
    if (props.primary) return 'white'
    else return 'blue'
 }};
`*/




function ReactButton6() 
{
    
    return (
        <div>
            <StyledButton>버튼</StyledButton>
            <LargeButton>LargeButton</LargeButton>
            <ReactButton>리액트버튼</ReactButton>
            <ReactLargeButton>리액트라지버튼</ReactLargeButton>
            <PrimaryButton>Normal</PrimaryButton>
            <PrimaryButton primary>Normal</PrimaryButton>
            <PrimaryButton size='20px'>Normal</PrimaryButton>
        </div>
    )
}

export default ReactButton6;
