import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id='services'>
      <h5>Mis servicios</h5>
      <div className="container services__container">
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exceptur.</p>
            </li>
            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exceptur.</p>
            </li>
            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exceptur.</p>
            </li>
            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exceptur.</p>
            </li>
            <li>
              <BiCheck className = 'service__list-icon'/>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint exceptur.</p>
            </li>
          </ul>
        </article>
        
      </div>
    </section>
  )
}

export default Services