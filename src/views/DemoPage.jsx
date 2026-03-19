import './DemoPage.css'

const LOOM_EMBED_URL = 'https://www.loom.com/embed/658e29e14c3f489c84525e7e20a379a9'

export default function DemoPage() {
  return (
    <div className="demo-page">
      <section className="demo-page__hero">
        <h1 className="demo-page__title">Sytrex Free Demo</h1>
        <div className="demo-page__video-wrapper">
          <iframe
            src={LOOM_EMBED_URL}
            className="demo-page__video"
            frameBorder="0"
            allowFullScreen
            allow="fullscreen"
            title="Sytrex Demo"
          />
        </div>
      </section>

      <section className="demo-page__cta-section">
        <h2 className="demo-page__cta-title">
          Now it&apos;s your turn. Let's <span className="demo-page__highlight">build a process that scales.</span>
        </h2>
        <a
          href="https://meetings.hubspot.com/daniel2805"
          target="_blank"
          rel="noopener noreferrer"
          className="demo-page__cta-btn"
        >
          Book Strategy Call
        </a>
      </section>
    </div>
  )
}
