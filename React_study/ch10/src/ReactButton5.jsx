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
const ReactLargeButton = styled(ReactButton)`
          font-size: 50px;
`


function ReactButton5() 
{
    
    return (
        <div>
            <StyledButton>버튼</StyledButton>
            <LargeButton>LargeButton</LargeButton>
            <ReactButton>리액트버튼</ReactButton>
            <ReactLargeButton>리액트라지버튼</ReactLargeButton>
        </div>
    )
}

export default ReactButton5;
