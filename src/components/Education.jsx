import { useEffect, useRef } from 'react'
import '../styles/Education.css'

const edu = [
  {
    degree: 'HSC',
    full: 'Higher Secondary Certificate',
    subject: 'Business Management Technology',
    school: 'Boalkhali Sirazul Islam Degree College',
    gpa: '3.38 / 5.00',
  },
  {
    degree: 'SSC',
    full: 'Secondary School Certificate',
    subject: 'Business Studies',
    school: 'P. C. Sen Sarowatoli High School',
    gpa: '3.61 / 5.00',
  },
]

export default function Education() {
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
    <section id="education" ref={ref}>
      <div className="section-container">
        <div className="section-header rv">
          <div className="section-num">03</div>
          <div className="section-info">
            <div className="section-sub">// Academic</div>
            <div className="section-title">Education</div>
          </div>
          <div className="section-line"></div>
        </div>

        <div className="edu-grid">
          {edu.map((e, i) => (
            <div className={`edu-card gc rv d${i + 1}`} key={i}>
              <div className="edu-badge-top">{e.degree}</div>
              <div className="edu-full">{e.full}</div>
              <div className="edu-subject">{e.subject}</div>
              <div className="edu-school">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                {e.school}
              </div>
              <div className="edu-gpa-row">
                <span className="edu-gpa-label">GPA</span>
                <div className="edu-gpa-bar">
                  <div
                    className="edu-gpa-fill"
                    style={{ width: `${(parseFloat(e.gpa) / 5) * 100}%` }}
                  ></div>
                </div>
                <span className="edu-gpa-val">{e.gpa}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
