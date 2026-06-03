import { useEffect, useState } from 'react'
import '../styles/Navbar.css'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`navbar${scrolled ? ' scrolled' : ''}`}>
      <div className="nav-logo">MHR</div>
      <ul className="nav-links">
        <li><a onClick={() => scrollTo('about')}>Profile</a></li>
        <li><a onClick={() => scrollTo('experience')}>Experience</a></li>
        <li><a onClick={() => scrollTo('education')}>Education</a></li>
        <li><a onClick={() => scrollTo('skills')}>Skills</a></li>
        <li><a onClick={() => scrollTo('contact')}>Contact</a></li>
      </ul>
      <button className="nav-pdf" onClick={() => window.print()}>Save PDF</button>
    </nav>
  )
}
