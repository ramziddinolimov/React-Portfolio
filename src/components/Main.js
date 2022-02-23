import React from 'react'
import styled from 'styled-components'



const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
`

function Main() {
  return (
    <MainContainer>
        Main Component/Page
    </MainContainer>
  )
}

export default Main