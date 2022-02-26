import React from 'react'
import styled from 'styled-components'

import Me from '../assets/Images/profile img.jpg'


const Box = styled.div`
    position:absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 40vh;
    display: flex;
    background-repeat: no-repeat;
    background-size: 100% 2px;
    background: linear-gradient(
        to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) bottom,
        linear-gradient(
            to right,
            ${props => props.theme.body} 50%,
            ${props => props.theme.text} 50%) top;
    border-left: 2px solid ${props => props.theme.body};
    border-right: 2px solid ${props => props.theme.text};
    z-index:1;
        
`

const Intro = () => {
  return (
    <Box>
        <SubBox>
            <Text>
                <h1>Hi</h1>
                <h3>I am Full Stack Developer</h3>
                <h6>I am Web Programming Node.js</h6>
            </Text>
        </SubBox>
        <SubBox>
            <div>
                <img className='pic' src={Me} alt='Profile img'>
            </div>
        </SubBox>
    </Box>
  )
}

export default Intro