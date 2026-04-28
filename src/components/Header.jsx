import './Header.css'

export default function Header({ onBookDemo }) {
  return (
    <header className="header">
      <nav className="header__nav" aria-label="Primary">
        <a href="/" className="header__logo" aria-label="Sytrex home">
          <div className="header__logo-crop">
            <img src="/sytrex.png" alt="Sytrex" className="header__logo-img" width="137" height="42" />
          </div>
        </a>
        <button type="button" className="header__cta" onClick={onBookDemo}>
          Book a Demo
        </button>
      </nav>
    </header>
  )
}
