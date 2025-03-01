import {Link} from 'react-router-dom'

import './index.css'

const Header = () => (
  <nav className="header-container">
    <div className="logo-and-title-container">
      <img
        alt="wave"
        className="logo"
        src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
      />
      <h1 className="title">Wave</h1>
    </div>
    <ul className="nav-items-list">
      <li className="link-item">
        <Link to="contact" className="route-link">
          Contact
        </Link>
        <Link className="route-link" to="/">
          Home
        </Link>
        <Link className="route-link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
)

export default Header
