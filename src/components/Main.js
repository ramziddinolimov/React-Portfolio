import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
// import { Container } from 'tsparticles'



const MainContainer = styled.div`
  background: ${props => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  position: relative;

  h2,h3,h4,h5,h6 {
    font-family: 'Karla', sans-serif;
    font-weight: 500;
  }
`

const Container = styled.div`
  padding: 2rem;
`

const Contact = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 2rem;
  right: calc(1rem + 2vw);
  text-decoration: none;
  z-index: 1;
`

const BLOG = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 50%;
  right: calc(1rem + 2vw);
  transform: rotate(180deg) translate(-50%, -50%)
  text-decoration: none;
  z-index: 1;
`

function Main() {
  return (
    <MainContainer>
        <Container>
          <PowerButton/>
          <LogoComponent/>
          <SocialIcons/>

          <Contact target="_blank" to={{pathname:"mailto:ramizmafiya@gmail.com"}}>
            <h3>
              Say hi...
            </h3>
          </Contact>

          <BLOG to="/blog">
              <h3>
                Blog
              </h3>
          </BLOG>
        </Container>
    </MainContainer>
  )
}

export default Main