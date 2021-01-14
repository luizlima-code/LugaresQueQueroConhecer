import styled from 'styled-components'
import { ReactComponent as Countrie } from './countrie.svg'
import { MdModeEdit as Edit } from 'react-icons/md'
import { TiDeleteOutline as Delete } from 'react-icons/ti'

const DivCard = styled.div`
  background-color: #FFFF;
  width: 250px;
  height: 250px;
  border-radius: 10px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Icons = styled.span`
  :hover {
    cursor: pointer;
  }
`

const DIV1 = styled.div`
  display: flex;
  width: 90%;
  justify-content: space-between;
  padding: 15px 0 0 0;
  border-bottom: 1px solid;
  border-color: #ABABAB;
`

const IMG = styled.a`
  width: 56px;
  height: 34px;
`
const Title = styled.p`
  font-size: 16px;
  font-weight: bold;
  color: #4F9419;

`

function Card () {
  return (
      <DivCard>
        <DIV1>
          <div>
            <IMG>
              <Countrie/>
            </IMG>
            <Title>BRASIL</Title>
          </div>
          <div>
            <Icons> <Edit /> </Icons>
            <Icons> <Delete /> </Icons>
          </div>
        </DIV1>
        <div>
          <p>Local: Dubai</p>
          <p>Meta: 01/2024</p>
        </div>
      </DivCard>
  )
}

export default Card;