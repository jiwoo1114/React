import styled, { keyframes } from 'styled-components'

const move = keyframes`
  0%{
  left:0;
  }
  50%{
  left:300px;
  }
  100%{
  left:0;
  }
`

const Ball = styled.div`
   position:absolute;
   width: 50px;
   height: 50px;
   background-color: red;
   border-radius: 50%;
   animation: ${move} 2s infinite;
`

function Quiz06() {
   return <Ball />
}

export default Quiz06
