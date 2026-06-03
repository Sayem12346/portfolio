import { useEffect, useRef } from 'react'
import '../styles/Skills.css'

const coreSkills = [
  'Warehouse Operations', 'Packing and Sorting', 'Material Handling',
  'Production Line Work', 'Physical Labor', 'Teamwork',
  'Shift and Overtime Flexibility', 'Workplace Safety', 'Quality Control',
  'Time Management', 'MS Word and Excel', 'Loading and Unloading',
  'Fast-Paced Environments', 'Instruction Following',
]

const languages = [
  { lang: 'Bengali', level: 'Native / Mother Tongue', pct: 100 },
  { lang: 'English', level: 'Conversational', pct: 52 },
]

export default function Skills() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rv,.rl,.rr,.rs')
    const obs = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('on') })
    }, { threshold: 0.1 })
    els?.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="skills" ref={ref}>
      <div className="section-container">
        <div className="section-header rv">
          <div className="section-num">04</div>
          <div className="section-info">
            <div className="section-sub">// Capabilities</div>
            <div className="section-title">Core Skills</div>
          </div>
          <div className="section-line"></div>
        </div>

        <div className="skills-wrap">
          <div className="sk-tags rv d1">
            {coreSkills.map((s, i) => (
              <div className="sk" key={i} style={{ transitionDelay: `${i * 0.04}s` }}>{s}</div>
            ))}
          </div>

          <div className="lang-section rv d2">
            <div className="lang-title">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
              Language Proficiency
            </div>
            <div className="lang-list gc">
              {languages.map((l, i) => (
                <div className="lang-row" key={i}>
                  <div className="lang-info">
                    <span className="lang-name">{l.lang}</span>
                    <span className="lang-level">{l.level}</span>
                  </div>
                  <div className="lang-bar">
                    <div className="lang-fill" style={{ width: `${l.pct}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
