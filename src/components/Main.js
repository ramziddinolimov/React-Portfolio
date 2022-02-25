import React from 'react'
import { NavLink } from 'react-router-dom'
import styled, { keyframes } from 'styled-components'
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import { YinYang } from './AllSvgs'
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
    font-size: 28px;
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
  transform: rotate(90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const WORK = styled(NavLink)`
  color: ${props => props.theme.text};
  position: absolute;
  top: 55%;
  left: 2.6rem;
  transform: rotate(-90deg) translate(-50%, -50%);
  text-decoration: none;
  z-index: 1;
`

const BottomBar = styled.div`
position: absolute;
bottom: 2rem;
left: 0;
right: 0;
width: 100%;
display: flex;
justify-content: space-evenly;
`

const ABOUT = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const SKILLS = styled(NavLink)`
  color: ${props => props.theme.text};
  text-decoration: none;
  z-index: 1;
`

const rotate = keyframes`
from{
  transform: rotate(0);
}

to{
  transform: rotate(360deg);
}
`

const Center = styled.button`
position: absolute;
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
border: none;
outline: none;
background-color: transparent;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

&>:first-child {
  animation: ${rotate} infinite 1.5s linear;
}

&>:last-child {
  padding-top: 1rem;
}
`

function Main() {
  return (
    <MainContainer>
        <Container>
          <PowerButton/>
          <LogoComponent/>
          <SocialIcons/>

          <Center>
              <YinYang width={150} height={150} fill='currentColor' />
              <span>click here</span>
          </Center>

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

          <WORK to="/work">
              <h3>
                Work
              </h3>
          </WORK>

          <BottomBar>
            <ABOUT to="/about">
              <h3>
                About.
              </h3>
            </ABOUT>

            <SKILLS to="/skills">
              <h3>
                My Skills.
              </h3>
            </SKILLS>
          </BottomBar>
        </Container>
    </MainContainer>
  )
}

export default Main