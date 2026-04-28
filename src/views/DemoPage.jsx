import { Helmet } from 'react-helmet-async'
import './DemoPage.css'

const YOUTUBE_EMBED_URL = 'https://www.youtube.com/embed/x-DkidDq7BQ'

export default function DemoPage() {
  return (
    <>
      <Helmet>
        <title>Watch the Sytrex for Brokers Demo</title>
        <meta name="description" content="See how reinsurance brokers move deals from submission to placement with Sytrex — automated submission capture, AI-driven market strategy, and instant slip generation. Watch the demo and book a strategy call." />
        <link rel="canonical" href="https://brokers.sytrex.tech/demo" />
        <meta property="og:title" content="Watch the Sytrex for Brokers Demo" />
        <meta property="og:description" content="See structured reinsurance placement end-to-end — then book a strategy call." />
        <meta property="og:url" content="https://brokers.sytrex.tech/demo" />
      </Helmet>
      <div className="demo-page">
      <section className="demo-page__hero">
        <h1 className="demo-page__title">Sytrex Free Demo</h1>
        <div className="demo-page__video-wrapper">
          <iframe
            src={YOUTUBE_EMBED_URL}
            className="demo-page__video"
            frameBorder="0"
            allowFullScreen
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
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
    </>
  )
}
