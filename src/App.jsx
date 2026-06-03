import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'

export default function App() {
  useEffect(() => {
    // Custom cursor
    const cur = document.getElementById('cur')
    const ring = document.getElementById('cur-ring')
    let rx = 0, ry = 0, cx = 0, cy = 0

    const onMove = (e) => {
      cx = e.clientX; cy = e.clientY
      if (cur) { cur.style.left = cx + 'px'; cur.style.top = cy + 'px' }
      document.body.classList.add('mm')
    }

    const lerp = () => {
      rx += (cx - rx) * .12
      ry += (cy - ry) * .12
      if (ring) { ring.style.left = rx + 'px'; ring.style.top = ry + 'px' }
      requestAnimationFrame(lerp)
    }
    lerp()
    window.addEventListener('mousemove', onMove)

    const hoverEls = document.querySelectorAll('a, button, .gc, .sk, .chip')
    const addHv = () => document.body.classList.add('hv')
    const rmHv = () => document.body.classList.remove('hv')
    hoverEls.forEach(el => { el.addEventListener('mouseenter', addHv); el.addEventListener('mouseleave', rmHv) })

    // Progress bar
    const prog = document.getElementById('prog')
    const onScroll = () => {
      const pct = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight) * 100
      if (prog) prog.style.width = pct + '%'
    }
    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <>
      <div id="prog"></div>
      <div id="cur"></div>
      <div id="cur-ring"></div>

      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Contact />
      </main>
    </>
  )
}
