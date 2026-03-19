import { useEffect, useRef } from 'react'
import { IconClipboard, IconDatabase, IconRocket } from '../components/Icons'
import './LandingPage.css'

export default function LandingPage({ onWatchDemo }) {
  const videoRef = useRef(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 3
    }
  }, [])

  return (
    <div className="landing">
      <section className="landing__hero">
        <div className="landing__hero-inner">
          <h1 className="landing__hero-title">
            How <span className="landing__highlight">Reinsurance Brokers</span> Industrialize Placement and Move 10x More Deals Without Inbox Chaos
          </h1>
          <button type="button" className="landing__cta landing__cta--primary" onClick={onWatchDemo}>
            Watch the Reinsurance Broker Demo
          </button>
          <div className="landing__hero-visual">
            <div className="landing__hero-video-wrapper">
              <video
                ref={videoRef}
                src="https://mga-landing-video.s3.us-east-1.amazonaws.com/Gif+Sytrex+2x.mp4"
                className="landing__hero-video"
                autoPlay
                muted
                loop
                playsInline
              >
                Your browser does not support the video tag.
              </video>
              <button
                type="button"
                className="landing__hero-video-overlay"
                onClick={onWatchDemo}
                aria-label="Watch the free demo"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="landing__section landing__benefits" id="features">
        <div>
        <p className="landing__eyebrow">In this video, you&apos;ll discover</p>
        <h2 className="landing__section-title">How elite broker teams operate</h2>
        </div>
        <div className="landing__benefits-inner">
          <div className="landing__benefit-card">
            <span className="landing__benefit-num">1</span>
            <h3 className="landing__benefit-title">Eliminate <span className="landing__highlight">Inbox Driven Placement</span></h3>
            <p className="landing__benefit-desc">
              Automatic submission capture from email so brokers stop triaging inboxes and start placing deals.<br/><br/>
              No more:
              <ul>
                <li>inbox chaos</li>
                <li>missed submissions</li>
                <li>manual deal tracking</li>
              </ul>
            </p>
          </div>
          <div className="landing__benefit-card">
            <span className="landing__benefit-num">2</span>
            <h3 className="landing__benefit-title">Execute <span className="landing__highlight">Market Strategy Faster</span></h3>
            <p className="landing__benefit-desc">
              Identify the right markets instantly using appetite fit, placement history, and AI recommendations.<br/><br/>
              Place risks faster with:
              <ul>
                <li>structured market strategy</li>
                <li>real time capacity tracking</li>
                <li>automated market outreach</li>
              </ul>
            </p>
          </div>
          <div className="landing__benefit-card">
            <span className="landing__benefit-num">3</span>
            <h3 className="landing__benefit-title">Compare Quotes <span className="landing__highlight">Without Spreadsheets</span></h3>
            <p className="landing__benefit-desc">
              All quotes structured automatically so brokers compare lines, rates, and commissions instantly.<br/><br/>
              No copy paste.<br/>
              No spreadsheet reconciliation.<br/><br/>
              Just clean deal execution.
            </p>
          </div>
        </div>
      </section>

      <section className="landing__section landing__walkthrough">
        <div className="landing__walkthrough-inner">
          <div className="landing__walkthrough-left">
            <h2 className="landing__section-title">
              A Live Walkthrough of <span className="landing__highlight">Structured Reinsurance Placement</span>
            </h2>
            <p className="landing__walkthrough-desc">
              In this demo you will see how a reinsurance broker moves a deal from submission to placement.<br/><br/>
              We walk through:
              <ul>
                <li>Automatic submission capture from email</li>
                <li>Structured deal workspace</li>
                <li>AI assisted market strategy</li>
                <li>Automated market outreach</li>
                <li>Real time quote comparison</li>
                <li>Instant slip generation</li>
              </ul>
              No theory. Just how brokers actually place business.
            </p>
          </div>
          <div className="landing__walkthrough-right">
            <p className="landing__walkthrough-intro">Behind the scenes you will see how modern brokers:</p>
            <ul className="landing__walkthrough-list">
              <li><b>Manage 10x more submissions</b> without increasing headcount</li>
              <li><b>Turn quote comparison</b> into leverage instead of spreadsheets</li>
              <li><b>Create audit ready placements</b> with zero copy paste errors</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="landing__section landing__section--gray">
        <p className="landing__eyebrow">Who should watch</p>
        <h2 className="landing__section-title">This is for you if</h2>
        <div className="landing__cards">
          <div className="landing__audience-card">
            <div className="landing__audience-icon">
              <IconClipboard />
            </div>
            <h3 className="landing__audience-title">Reinsurance Placement Teams</h3>
            <p className="landing__audience-desc">You manage facultative, treaty, or fronting placements and deal with large submission volume.</p>
          </div>
          <div className="landing__audience-card">
            <div className="landing__audience-icon">
              <IconDatabase />
            </div>
            <h3 className="landing__audience-title">Brokerage Operations Leaders</h3>
            <p className="landing__audience-desc">You want real time visibility across submissions, markets, quotes, and capacity.</p>
          </div>
          <div className="landing__audience-card">
            <div className="landing__audience-icon">
              <IconRocket />
            </div>
            <h3 className="landing__audience-title">Firms Scaling Placement Volume</h3>
            <p className="landing__audience-desc">You are moving beyond inbox driven placements and need infrastructure that scales.</p>
          </div>
        </div>
      </section>

      <section className="landing__section landing__section--gray">
        <p className="landing__eyebrow">Fit Matters</p>
        <h2 className="landing__section-title">Sytrex Isn&apos;t Designed For Teams That</h2>
        <div className="landing__fit-cards">
          <div className="landing__fit-card">
            <span className="landing__fit-x" aria-hidden>✕</span>
            <p>If you are comfortable running placements from Outlook and Excel</p>
          </div>
          <div className="landing__fit-card">
            <span className="landing__fit-x" aria-hidden>✕</span>
            <p>If your team does not feel bottlenecked by manual triage</p>
          </div>
          <div className="landing__fit-card">
            <span className="landing__fit-x" aria-hidden>✕</span>
            <p>If your firm already has real time visibility across markets, quotes, and capacity</p>
          </div>
        </div>
      </section>

      <section className="landing__section landing__cta-strip">
        <div className="landing__cta-box">
          <h2 className="landing__cta-box-title">
            Sytrex Was Built For <span className="landing__highlight">The Real Complexity</span> Reinsurance Brokers Deal With <span className="landing__highlight">Every Day</span>
          </h2>
          <p className="landing__cta-box-desc">
            Submission intake, market strategy, quote comparison, and slip generation all inside one placement infrastructure.<br/><br/>
            No inbox chaos.<br/>
            No spreadsheet reconciliation.<br/>
            No lost deals.<br/><br/>
            Just structured placement execution.
          </p>
          <button type="button" className="landing__cta landing__cta--primary" onClick={onWatchDemo}>
            Book a Placement Strategy Session
          </button>
        </div>
      </section>
    </div>
  )
}
