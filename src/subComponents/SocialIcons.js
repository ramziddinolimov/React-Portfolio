import React from 'react'
import { NavLink } from 'react-router-dom'
import { Facebook, Github, Twitter, YouTube } from '../components/AllSvgs'

const SocialIcons = () => {
  return (
    <div>
        <div>
            <NavLink to='/'>
                <Github width={25} height={25} fill='currentColor' />
            </NavLink>
        </div>

        <div>
            <NavLink to='/'>
                <Twitter width={25} height={25} fill='currentColor' />
            </NavLink>
        </div>

        <div>
            <NavLink to='/'>
                <YouTube width={25} height={25} fill='currentColor' />
            </NavLink>
        </div>

        <div>
            <NavLink to='/'>
                <Facebook width={25} height={25} fill='currentColor' />
            </NavLink>

        </div>
    </div>
  )
}

export default SocialIcons