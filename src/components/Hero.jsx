import '../styles/Hero.css'

export default function Hero() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section className="hero">
      <div className="hero-wrap">
        <div className="hero-left">
          <div className="h-status">
            <div className="h-status-dot"></div>
            Available for Hire in Europe
          </div>

          <h1 className="h-name">
            <span className="w1">MD. Hafizur</span>
            <span className="w2">Rahman</span>
          </h1>

          <div className="h-role">
            Warehouse Worker <span>/</span> Packing Worker <span>/</span> Production Worker <span>/</span> Factory Worker
          </div>

          <p className="h-desc">
            Production and Warehouse Specialist with 1+ year of experience in footwear manufacturing.
            Physically fit, team-oriented, and actively seeking opportunities across Europe.
          </p>

          <div className="h-chips">
            {['Warehouse','Packing','Production','General Labor','Open to Europe'].map(c => (
              <div key={c} className="chip"><span>{c}</span></div>
            ))}
          </div>

          <div className="h-btns">
            <a href="#contact" className="btn-gold" onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              Contact Me
            </a>
            <button className="btn-ghost" onClick={() => window.print()}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 9V2h12v7M6 18H4a2 2 0 01-2-2v-5a2 2 0 012-2h16a2 2 0 012 2v5a2 2 0 01-2 2h-2"/>
                <rect x="6" y="14" width="12" height="8"/>
              </svg>
              Download CV
            </button>
          </div>
        </div>

        <div className="h-photo">
          <div className="photo-scene">
            <div className="pr1"></div>
            <div className="pr2"></div>
            <div className="pr3"></div>
            <div className="hc tl"></div>
            <div className="hc tr"></div>
            <div className="hc bl"></div>
            <div className="hc br"></div>
            <div className="pframe">
              {/* Avatar placeholder with initials */}
              <div className="avatar-placeholder">
                <span>MHR</span>
              </div>
            </div>
            <div className="pglow"></div>
            <div className="pbadge">
              <span>Production Specialist</span>
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-hint">
        <div className="smouse"><div className="swheel"></div></div>
        <span>Scroll Down</span>
      </div>

      <div className="hero-bg-circle c1"></div>
      <div className="hero-bg-circle c2"></div>
    </section>
  )
}
