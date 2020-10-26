import React, { Suspense, lazy } from 'react'
import './assets/main.css'
import { BrowserRouter } from 'react-router-dom'

// Component
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'

const Skills = lazy(() => import('./components/Skills'))
const Portfolio = lazy(() => import('./components/Portfolio'))

function App() {
  return (
    <div className='font-base'>
      <BrowserRouter>
        <Navbar />
        <main className='min-h-screen bg-white'>
          <Hero />
          <Suspense fallback={<div />}>
            <Skills />
          </Suspense>
          <Suspense fallback={<div />}>
            <Portfolio />
          </Suspense>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
