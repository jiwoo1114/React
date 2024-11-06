import styled from 'styled-components'

const Card = styled.div`
   border:2px solid black;
   &:hover{
   border:2px solid red;
}

`

function Quiz03() {
   return <Card>Hover me!</Card>
}
export default Quiz03
