import React from 'react'
import './about.css'
import ME from '../../assets/me.png'
import {SiPlatzi} from 'react-icons/si'
import {FaAward} from 'react-icons/fa'
import {FaCheck} from 'react-icons/fa'
const About = () => {
  return (
    <section id='about'>
      <h5>Conoce</h5>
      <h2>Acerca de mí</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src= {ME} alt="Mi foto" />
          </div>

        </div>
        <div className="about__content">
          <div className="about__cards">

            <article className='about__card'>
              <SiPlatzi className='about__icon'/>
              <h5>Estudiante de Platzi</h5>
            </article>

            <article className='about__card'>
              <FaAward className='about__icon'/>
              <h5>1 año de experiencia</h5>
            </article>

            <article className='about__card'>
              <FaCheck className='about__icon'/>
              <h5>Primeros proyectos</h5>
            </article>

          </div>
          <p>Vivo en Argentina, tengo 22 años y hace 2 años decidi dedicarme a las tecnologías de la información. Mi objetivo es hacer  del internet un lugar agradable para todo el mundo. Fuera de mi formación profesional me gusta compartir momentos con mi familia y amigos. Me gusta jugar videojuegos, mirar películas y leer personajes del mundo científico en mis tiempos libres.</p>
            <a href="#contact"className='btn btn-primary'>Contacto</a>

        </div>
      </div>
    </section>
  )
}

export default About