import React from 'react'
import './Navbar.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'

const Navbar = () => {
  return (
   <div>
    <a href="#home"><AiOutlineHome/></a>
    <a href="#about"><AiOutlineUser/></a>
    <a href="#experience"><BiBook/></a>
    <a href="#services"><RiServiceLine/></a>
    <a href="#contact"><BiMessageSquareDetail/></a>
   </div>
  )
}

export default Navbar