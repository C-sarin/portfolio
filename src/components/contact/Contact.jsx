import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import {BsWhatsapp} from 'react-icons/bs'
import { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0noi9bs', 'template_uifzlmm', form.current, '2eyJzuQgKVXq-joSB')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h2>Contáctame</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className='contact__option'>
          <HiOutlineMail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>cesarciotti1@gmail.com</h5>
          <a href="mailto:cesarciotti1@gmail.com" target="_blank" >Envíame un mensaje</a>

        </article>
        <article className='contact__option'>
          <BsWhatsapp className='contact__option-icon'/>
          <h4>Whatsapp</h4>
          <a href="https://wa.me/+5492622667937" target="_blank" >Envíame un mensaje</a>
        </article>
        </div>




        <form ref={form} onSubmit= {sendEmail}>
          <input type="text" name='name' placeholder='Nombre completo' required/>
          <input type="email" name='email' placeholder='Tu Email' required/>
          <textarea name="message" rows="7" placeholder='Tu mensaje' required></textarea>
          <button type='submit' className='btn btn-primary'>Enviar</button>

        </form>
      </div>

    </section>
  )
}

export default Contact