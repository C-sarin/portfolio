import React from 'react'
import './footer.css'
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import {SiPlatzi} from 'react-icons/si'

const Footer = () => {
  return (
    <footer >
      <a href="#" className='footer__logo'>C I O T T I</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">Bio</a></li>
        <li><a href="#experience">Experiencia</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#contact">Contacto</a></li>

      </ul>
      <div className="footer__socials">
        <a href="https://www.instagram.com/cesar_ciotti/"><FaInstagram/></a>
        <a href="https://twitter.com/CesarsCiotti"><FaTwitter/></a>
        <a href="https://platzi.com/p/cesarciotti1805/"><SiPlatzi/></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; César Ciotti. Todos los derechos reservados</small>
      </div>
      </footer>
  )
}

export default Footer