import styled from 'styled-components'
import { ReactComponent as Lugares } from "./lugares.svg";

const DIV = styled.div`
  width: 100%;
  height: 85px;
  background-color: black;
`

const ImageLogo = styled.div`
  width: 152px;
  height: 139px;
  margin-left: 53px;
  
`
function Header () {
  return (
    <>
      <DIV>
        <ImageLogo>
          <Lugares />
        </ImageLogo>
      </DIV>
    </>
  )
}

export default Header;