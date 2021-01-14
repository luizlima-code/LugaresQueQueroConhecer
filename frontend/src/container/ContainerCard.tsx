import styled from 'styled-components'
import Card from './Card'


const Box = styled.div`
  width: 95%;
  padding: 53px 0 0 33px;
`

const BoxChildren = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-gap: 33px 8px;
  justify-content: space-between;
`

function ContainerCard() {
  return(
    <Box>
      <BoxChildren>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </BoxChildren>
    </Box>
  )
}
export default ContainerCard;