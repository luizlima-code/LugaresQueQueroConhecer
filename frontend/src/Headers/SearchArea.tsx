import styled from 'styled-components'
import Forms from './Forms'

const AREAPrinc = styled.div`
  widht: 100%;
  height: 205px;
  background: #4F9419;
  display: flex;
  align-items: center;
  justify-content: center;
`

function SearchArea () {
  return (
    <>
      <AREAPrinc>
          <Forms />
      </AREAPrinc>
    </>
  )
}

export default SearchArea;

/* button precisa ser criado por fora*/