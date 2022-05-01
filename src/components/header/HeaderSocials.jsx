import React from 'react'
import {FaLinkedin} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/c%C3%A9sar-ciotti-7b2a9421b/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/C-sarin" target="_blank"><FaGithub/></a>
        <a href="https://twitter.com/CesarsCiotti" target="_blank"><FaTwitter/></a>
    </div>
  )
}

export default HeaderSocials