import React, {useRef} from 'react'
import "./Contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {BsGithub} from 'react-icons/bs'
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_4dfcr2e', 'template_cbdgzvt', form.current, '_NpdWJ5iCT6lmb6Un')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className='contact_option-icon'/>
            <h4>Email</h4>
            <h5>Jeff.BozierJr@gmail.com</h5>
            <h5>Send an Email</h5>
            <a href="mailto:jeff.bozierjr@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className="contact_option">
            <BsGithub className='contact_option-icon'/>
            <h4>LinkedIn</h4>
            <h5>Send a message through LinkedIn</h5>
            <a href="https://www.linkedin.com/in/jeff-bozier-jr/" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* End of Contact Options */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="text" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact