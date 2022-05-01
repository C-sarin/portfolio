import React from 'react'
import './services.css'
import {BsCheckLg} from 'react-icons/bs'

const Services = () => {
  return (
    <section id='services'>
      <h2>Mis servicios</h2>
      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Desarrollo Web</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BsCheckLg className = 'service__list-icon'/>
              <p>Diseño de interfaces web con React</p>
            </li>
            <li>
              <BsCheckLg className = 'service__list-icon'/>
              <p>Diseño de interfaces de usuario</p>
            </li>
            <li>
              <BsCheckLg className = 'service__list-icon'/>
              <p>Experiencia de usuario</p>
            </li>
            <li>
              <BsCheckLg className = 'service__list-icon'/>
              <p>Resolución de problemas</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Services