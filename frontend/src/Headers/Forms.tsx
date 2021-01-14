import styled from "styled-components";
import Button from "./Button";

const DIVDAD = styled.div`
  display:flex;
  align-items:center;
  justify-content:center;
  width: 89.9%;
`
const DIV = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: white;
`;

const DIV1 = styled.div`
  width: 23.39%;
`;

const DIV2 = styled.div`
  padding-left: 28px;
  width: 35.13%;
`;

const DIV3 = styled.div`
  width: 18.37%;
  padding-left: 28px;
`;

const DIV4 = styled.div`
  width: 15.67%;
  padding-left: 34px;
`;

const PAIS = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 7px;
  :focus {
    outline: none;
  }
  padding-left: 15px;
  border: none;
`;

const LOCAL = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 7px;
  :focus {
    outline: none;
  }
  padding-left: 15px;
  border: none;
`;

const META = styled.input`
  width: 100%;
  height: 48px;
  border-radius: 7px;
  :focus {
    outline: none;
  }
  padding-left: 15px;
  border: none;
`;

function Forms() {
  return (
    <>
    <DIVDAD>
      <DIV>
        <DIV1>
          <form>
            <label>
              País <br />
              <PAIS placeholder="Selecione ..."></PAIS>
            </label>
          </form>
        </DIV1>
        <DIV2>
          <form>
            <label>
              Local <br />
              <LOCAL
                type="text"
                placeholder="Digite o local que deseja conhecer"
              />
            </label>
          </form>
        </DIV2>
        <DIV3>
          <form>
            <label>
              Meta <br />
              <META type="text" placeholder="mês/ano" />
            </label>
          </form>
        </DIV3>
        <DIV4>
          <label>
            <br />
            <Button />
          </label>
        </DIV4>
      </DIV>
    </DIVDAD>
    </>
  );
}

export default Forms;
