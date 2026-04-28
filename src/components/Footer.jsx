import './Footer.css'

export default function Footer({ onBookDemo }) {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <a href="/" className="footer__logo">
          <div className="footer__logo-crop">
            <img src="/sytrex.png" alt="Sytrex" className="footer__logo-img" />
          </div>
        </a>
        <div className="footer__links">
          <div className="footer__col">
            <h3 className="footer__heading">Quick links</h3>
            <a href="#features">Features</a>
            <button type="button" className="footer__link-btn" onClick={onBookDemo}>
              Book a Demo
            </button>
          </div>
          <div className="footer__col">
            <h3 className="footer__heading">Social</h3>
            <a href="https://www.linkedin.com/company/sytrex" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://www.youtube.com/@Sytrex_Underwriting" target="_blank" rel="noopener noreferrer">
              YouTube
            </a>
          </div>
        </div>
        <div className="footer__partners">
          <img src="/aws-startups.png" alt="AWS Startups" loading="lazy" decoding="async" className="footer__partner-logo" />
          <img src="/nvidia.png" alt="NVIDIA Inception Program" loading="lazy" decoding="async" className="footer__partner-logo" />
          <a href="https://mgaa.co.uk/" target="_blank" rel="noopener noreferrer">
            <img src="/mgaa.png" alt="MGAA" loading="lazy" decoding="async" className="footer__partner-logo footer__partner-logo--color" />
          </a>
        </div>
        <p className="footer__copy">© 2025 Sytrex. All Rights Reserved.</p>
      </div>
    </footer>
  )
}
