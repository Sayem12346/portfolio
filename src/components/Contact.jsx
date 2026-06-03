import { useEffect, useRef } from 'react'
import '../styles/Contact.css'

const links = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
    label: 'Email',
    value: 'hafizurrahmansayem@gmail.com',
    href: 'mailto:hafizurrahmansayem@gmail.com',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 01.11 2.24 2 2 0 012.11.11h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
    label: 'Phone',
    value: '+880 1799 493534',
    href: 'tel:+8801799493534',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg>,
    label: 'LinkedIn',
    value: 'md-hafizur-rahman-8b981b2b6',
    href: 'https://linkedin.com/in/md-hafizur-rahman-8b981b2b6',
  },
]

export default function Contact() {
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
    <section id="contact" ref={ref}>
      <div className="section-container">
        <div className="section-header rv">
          <div className="section-num">05</div>
          <div className="section-info">
            <div className="section-sub">// Contact</div>
            <div className="section-title">Get In Touch</div>
          </div>
          <div className="section-line"></div>
        </div>

        <div className="contact-wrap">
          <div className="ct-left rv d1">
            <h2 className="ct-heading">
              Seeking Opportunities<br />
              <span>Across Europe</span>
            </h2>
            <p className="ct-desc">
              I am actively looking for warehouse, packing, production, or factory work roles
              in Europe. Feel free to reach out — I respond promptly.
            </p>
            <div className="ct-eu gc">
              <div className="ct-eu-head">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                For EU Employers
              </div>
              {[
                ['Full Name', 'MD. Hafizur Rahman'],
                ['Date of Birth', '10 February 2006'],
                ['Nationality', 'Bangladeshi'],
              ].map(([k, v]) => (
                <div className="ct-eu-row" key={k}>
                  <span>{k}</span><strong>{v}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="ct-right rv d2">
            {links.map((l, i) => (
              <a className="ct-link-card gc" href={l.href} target="_blank" rel="noreferrer" key={i}>
                <div className="ct-link-icon">{l.icon}</div>
                <div className="ct-link-info">
                  <div className="ct-link-label">{l.label}</div>
                  <div className="ct-link-val">{l.value}</div>
                </div>
                <svg className="ct-link-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
              </a>
            ))}
          </div>
        </div>

        <div className="footer rv d3">
          <div className="footer-logo">MHR</div>
          <div className="footer-copy">© 2025 MD. Hafizur Rahman — All rights reserved</div>
          <div className="footer-decl">
            "I hereby confirm that all information provided is true and accurate to the best of my knowledge."
          </div>
        </div>
      </div>
    </section>
  )
}
