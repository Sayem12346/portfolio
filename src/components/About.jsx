import { useEffect, useRef } from 'react'
import '../styles/About.css'

const stats = [
  { num: '1+', label: 'Years Experience' },
  { num: '3', label: 'Core Skills' },
  { num: '2', label: 'Qualifications' },
  { num: 'EU', label: 'Job Target' },
]

const contacts = [
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.11 2.24 2 2 0 012.11.11h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    label: 'Phone',
    value: '+880 1799 493534',
    href: 'tel:+8801799493534',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'Email',
    value: 'hafizurrahmansayem@gmail.com',
    href: 'mailto:hafizurrahmansayem@gmail.com',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    label: 'Location',
    value: 'Boalkhali, Chittagong, BD',
    href: null,
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
    label: 'LinkedIn',
    value: 'md-hafizur-rahman',
    href: 'https://linkedin.com/in/md-hafizur-rahman-8b981b2b6',
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/></svg>,
    label: 'Date of Birth',
    value: '10 February 2006',
    href: null,
  },
  {
    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    label: 'Nationality',
    value: 'Bangladeshi',
    href: null,
  },
]

export default function About() {
  const ref = useRef(null)

  useEffect(() => {
    const els = ref.current?.querySelectorAll('.rv,.rl,.rr,.rs')
    const obs = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('on') })
    }, { threshold: 0.12 })
    els?.forEach(el => obs.observe(el))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="about" ref={ref}>
      <div className="section-container">
        <div className="section-header rv">
          <div className="section-num">01</div>
          <div className="section-info">
            <div className="section-sub">// Profile</div>
            <div className="section-title">Professional Summary</div>
          </div>
          <div className="section-line"></div>
        </div>

        <div className="about-grid">
          <div className="about-text rv d1">
            <p>
              Production and factory worker with <strong>1+ year of hands-on experience</strong> in
              footwear manufacturing. Skilled in production line support, packing assistance,
              material handling, and maintaining workplace safety standards.
            </p>
            <p>
              Physically fit and capable of shift work, overtime, and fast-paced warehouse or
              factory environments. Actively seeking employment opportunities in <strong>Europe</strong> within
              warehouse and industrial sectors.
            </p>

            <div className="eu-badges">
              {[
                '✓ Willing to relocate to Europe',
                '✓ Available for shift work and overtime',
                '✓ Physically fit for manual labor',
                '✓ Able to follow instructions strictly',
                '✓ Adaptable to factory environments',
                '✓ ATS-friendly profile for EU employers',
              ].map((b, i) => (
                <div className="eu-badge" key={i}>{b}</div>
              ))}
            </div>
          </div>

          <div className="about-right">
            <div className="stats-grid rv d2">
              {stats.map((s, i) => (
                <div className="stat-card gc" key={i}>
                  <div className="stat-num">{s.num}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="contact-card gc rv d3">
              <div className="cc-header">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 8v4M12 16h.01"/></svg>
                Contact & Info
              </div>
              {contacts.map((c, i) => (
                <div className="cc-row" key={i}>
                  <div className="cc-icon">{c.icon}</div>
                  <div className="cc-info">
                    <div className="cc-label">{c.label}</div>
                    {c.href
                      ? <a className="cc-val" href={c.href} target="_blank" rel="noreferrer">{c.value}</a>
                      : <div className="cc-val">{c.value}</div>
                    }
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
