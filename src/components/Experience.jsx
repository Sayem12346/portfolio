import { useEffect, useRef } from 'react'
import '../styles/Experience.css'

const jobs = [
  {
    title: 'Production Worker',
    duration: '1+ Year',
    company: 'MAF Shoes Limited',
    location: 'Bangladesh',
    type: 'Full-time',
    bullets: [
      'Production line support and footwear manufacturing assistance',
      'Packing, sorting, and material handling across production stages',
      'Quality control support — inspecting and verifying finished products',
      'Loading and unloading assistance at operational level',
      'Workplace safety compliance in OSHA-style environment',
      'Team-based production with full shift and overtime flexibility',
    ],
  },
]

export default function Experience() {
  const ref = useRef(null)
  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rv,.rl,.rr')
    const obs = new IntersectionObserver(e => {
      e.forEach(x => { if (x.isIntersecting) x.target.classList.add('on') })
    }, { threshold: 0.1 })
    els?.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" ref={ref}>
      <div className="section-container">
        <div className="section-header rv">
          <div className="section-num">02</div>
          <div className="section-info">
            <div className="section-sub">// Career</div>
            <div className="section-title">Work Experience</div>
          </div>
          <div className="section-line"></div>
        </div>

        <div className="exp-timeline">
          {jobs.map((job, i) => (
            <div className="exp-item rv d1" key={i}>
              <div className="exp-dot">
                <div className="dot-core"></div>
                <div className="dot-pulse"></div>
              </div>
              <div className="exp-card gc">
                <div className="exp-head">
                  <div>
                    <div className="exp-title">{job.title}</div>
                    <div className="exp-company">
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                      {job.company} — {job.location}
                    </div>
                  </div>
                  <div className="exp-meta">
                    <div className="exp-dur">{job.duration}</div>
                    <div className="chip">{job.type}</div>
                  </div>
                </div>
                <ul className="exp-bullets">
                  {job.bullets.map((b, j) => (
                    <li key={j}>
                      <span className="bullet-dot"></span>
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
