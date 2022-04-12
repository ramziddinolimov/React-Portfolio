import React from 'react'
import styledComponents from 'styled-components'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'


const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
  height: 100vh;

`

const Container = styledComponents.div`
width: 100%;
height: auto;
position: relative;
padding-bottom: 5rem;
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
`

function BlogPage() {
  return (
    <MainContainer>
        <Container>
            <LogoComponent />
            <PowerButton />
            <SocialIcons />
        </Container>
    </MainContainer>
  )
}

export default BlogPage