import React from 'react'
import styledComponents from 'styled-components'
import styled from 'styled-components'
import img from "../assets/Images/patrick-tomasso-Oaqk7qqNh_c-unsplash.jpg"
import LogoComponent from '../subComponents/LogoComponent'
import PowerButton from '../subComponents/PowerButton'
import SocialIcons from '../subComponents/SocialIcons'
import {Blogs} from '../data/BlogData'
import BlogComponent from './BlogComponent'


const MainContainer = styled.div`
  background-image: url(${img});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-attachment: fixed;
  width: 100vw;
`

const Container = styledComponents.div`
width: 100%;
height: 100vh;
position: relative;
padding-bottom: 5rem;
background-color: ${props => `rgba(${props.theme.bodyRgba}, 0.8)`};
`

const Center = styledComponents.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10rem;
`

const Grid = styledComponents.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(calc(10rem + 15vw), 1fr));
  grid-gap: calc(1rem + 2vw); 
`

function BlogPage() {
  return (
    <MainContainer>
        <Container>
            <LogoComponent />
            <PowerButton />
            <SocialIcons />
            <Center>
              <Grid>
                {
                  Blogs.map(blog => {
                   return <BlogComponent key={blog.id} blog={blog} />
                  })
                }
              </Grid>
            </Center>
        </Container>
    </MainContainer>
  )
}

export default BlogPage