import React from 'react'
import './Header.css'
import Resume from './CTA'
import profilePic from '../../assets/profilepic.png'
import HeaderSocials from './HeaderSocials'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello I'm</h5>
        <h1>Jeff Bozier</h1>
        <h5 className="text-light">Software Engineer</h5>
        <Resume /> 
        <HeaderSocials />

        <div className="me">
            <img src={profilePic} alt="Profile Pic" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header