import styled from 'styled-components'

const BUTTON = styled.button`
  width: 100%;
  height: 49px;
  border: none;
  background-color: #006C18;
  border-radius: 7px;
  color: white;
  :focus {
    outline: none;
  }
  :hover {
    cursor: pointer;
  }
`

function Button() {
  return (
      <BUTTON>Adicionar</BUTTON>
  );
}
export default Button;
