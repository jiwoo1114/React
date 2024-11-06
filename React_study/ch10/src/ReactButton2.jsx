import styled from 'styled-components'

//Styled-components는 스타일이 있는 컴포넌트(변수명 대문자)
//벡틱 안에 css를 작성 (css코드와 똑같이 작성)
const StyledButton = styled.button`
    color:white;
    background-color:green;
`


function ReactButton2() 
{
    
    return <StyledButton>버튼</StyledButton>
}

export default ReactButton2;
