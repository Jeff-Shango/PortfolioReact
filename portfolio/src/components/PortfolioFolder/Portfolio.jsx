import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/gamecornerA.png'
import img2 from '../../assets/truckingSite.png'
import img3 from '../../assets/teacherCalcA.png'
import img4 from '../../assets/'
const data = [
  {
    id: 1, 
    image: img1,
    title: "Shango's Game Corner",
    github: "https://github.com/Jeff-Shango/word-game.git",
    demo: "https://github.com/Jeff-Shango/word-game.git"
  },
  {
    id: 2, 
    image: img2,
    title: "Only Wright Trucking Site",
    github: "https://github.com/Jeff-Shango/OnlyWrightTraining.git",
    demo: "https://onlywrighttrucking.netlify.app"
  },
  {
    id: 3, 
    image: img3,
    title: "Teacher Grade Tracker",
    github: "https://github.com/Jeff-Shango/GradeTracker.git",
    demo: "https://github.com/Jeff-Shango/GradeTracker.git"
  },
  {
    id: 4, 
    image: img4,
    title: "Dashboard using React",
    github: "https://github.com/Jeff-Shango/dashboard.git",
    demo: "https://github.com/Jeff-Shango/dashboard.git"
  },
]
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img1} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img2} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img3} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img4} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img1} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
        <article className="portfolio_item">
          <div className="portfolio_item-image">
            <img src={img1} alt="pic" />
          </div>
          <h3>This is a portfolio item title</h3>
          <div className="portfolio_item-cta">
            <a href="https://github.com" className="btn" target='_blank'>Github</a>
            <a href="https://github.com" className='btn btn-primary' target='_blank'>Live Demo</a>
          </div>
        </article>
      </div>

    </section>
  )
}

export default Portfolio