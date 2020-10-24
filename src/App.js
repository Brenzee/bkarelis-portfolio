import React from 'react'
import './assets/main.css'
import { BrowserRouter } from 'react-router-dom'

// Component
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Portfolio from './components/Portfolio'
import Footer from './components/Footer'

function App() {
  return (
    <div className='font-base'>
      <BrowserRouter>
        <Navbar />
        <main className='min-h-screen bg-white'>
          <Hero />
          <Skills />
          <Portfolio />
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
