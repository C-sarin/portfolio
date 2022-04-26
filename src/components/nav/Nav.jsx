import React from 'react'
import './nav.css'
import {FaHome} from 'react-icons/fa'
import {FaUserAlt} from 'react-icons/fa'
import {FaBook} from 'react-icons/fa'
import {RiServiceFill} from 'react-icons/ri'
import {SiGooglemessages} from 'react-icons/si'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="# " onClick={() => setActiveNav ('# ')} className={activeNav === '# ' ? 'active' : ''}><FaHome/></a>
      <a href="#about"className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav ('#about')}><FaUserAlt/></a>
      <a href="#experience" className={activeNav === '#experience' ? 'active' : ''} onClick={() => setActiveNav ('#experience')}><FaBook/></a>
      <a href="#services" className={activeNav === '#services' ? 'active' : ''} onClick={() => setActiveNav ('#services')}><RiServiceFill/></a>
      <a href="#contact" className={activeNav === '#contact' ? 'active' : ''} onClick={() => setActiveNav ('#contact')}><SiGooglemessages/></a>

    </nav>
  )
}

export default Nav