import React from 'react'
import Header from './components/HeaderFolder/Header'
import About from './components/aboutFolder/About'
import Blog from './components/BlogFolder/Blog'
import Contact from './components/ContactFolder/Contact'
import Footer from './components/FooterFolder/Footer'
import Homepage from './components/HomePageFolder/Homepage'
import Navbar from './components/NavbarFolder/Navbar'
import Showcase from './components/ShowcaseFolder/Showcase'

const App = () => {
  return (
    <>
    <Header />
    <Navbar />
    <About />
    <Blog />
    <Contact />
    <Footer />
    <Homepage />
    <Showcase />
    </>
  )
}

export default App