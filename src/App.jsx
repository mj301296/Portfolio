import { useState } from 'react'
import './App.css'
import Header from './components/header/Header.jsx'
import Home from './components/home/Home.jsx'
import About from './components/about/About.jsx'
import Skills from './components/skills/Skills.jsx'
import Qualification from './components/qualification/Qualification.jsx'
import Work from './components/work/Work.jsx'
import Footer from './components/footer/Footer.jsx'
import { SpeedInsights } from "@vercel/speed-insights/next"

function App() {

  return (
    <>
      <Header />

      <main className='main'>
        <SpeedInsights/>
        <Home />
        <About />
        <Skills />
        <Qualification />
        <Work />
      </main>

      <Footer />
    </>
  )
}

export default App
