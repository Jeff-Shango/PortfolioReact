import React, { useEffect } from 'react'
import './Testimonials.css'
import mikePhoto from '../../assets/headshotWTruck.jpg'
import { animateOnScroll } from '../../functions/animateScrollFunctions'

const Testimonials = () => {
  useEffect(() => {
    animateOnScroll();
  }, []);

  return (
    <section id='testimonials' className='animate-on-scroll'>
      <h5 className='testimonialTitle'>Review from clients</h5>
      <h2 className='testimonialTitle'>Testimonials</h2>

      <div className="container testimonials_container">
        <article className="testimonial">
          <div className="client_avatar">
            <img src={mikePhoto} alt="testimonial photo" />
            
          </div>
          <h5 className="client_name">Michael Wright</h5>
            <small className="client_review">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae assumenda perspiciatis veniam. Quia error, doloribus aut aliquam eos rerum numquam.
            </small>
        </article>
      </div>
    </section>
  )
}

export default Testimonials