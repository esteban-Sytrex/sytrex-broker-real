import './Header.css'

export default function Header({ onBookDemo }) {
  return (
    <header className="header">
      <a href="/" className="header__logo">
        <div className="header__logo-crop">
          <img src="/sytrex.png" alt="Sytrex" className="header__logo-img" />
        </div>
      </a>
      <button type="button" className="header__cta" onClick={onBookDemo}>
        Book a Demo
      </button>
    </header>
  )
}
