import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer  from './components/Footer'

function App() {
    return (
        <div className="min-h-screen bg-slate-200 text-slate-800 dark:bg-[#0f172a] dark:text-slate-200">
            <Navbar />
            <main className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20'>
                <Hero />
                <About />
                <Skills/>
                <Projects />
                <Contact />
            </main>
            <Footer />
        </div>
    )
}

export default App