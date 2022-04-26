import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
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
              <h5>Platzi Student</h5>
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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dignissimos odio voluptas corporis repudiandae dolores libero consequuntur dicta esse debitis sapiente! Modi doloribus fuga consectetur cum? Molestiae deleniti tenetur itaque praesentium!</p>
            <a href="#contact"className='btn btn-primary'>Let's talk!</a>

        </div>
      </div>
    </section>
  )
}

export default About