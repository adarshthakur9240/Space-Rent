import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const location = useLocation();

  const navLinks = [
    { label: 'Listings', path: '/explore' },
    { label: 'Research', path: '/research' },
    { label: 'Ownership', path: '/ownership' },
    { label: 'Logistics', path: '/logistics' },
  ];

  return (
    <nav className="navbar glass-nav">
      <div className="navbar-inner">
        <Link to="/" className="navbar-logo">LunaTerra</Link>

        <div className="navbar-links">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`navbar-link ${location.pathname === link.path ? 'active' : ''}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="navbar-actions">
          <button className="navbar-login">Login</button>
          <Link to="/checkout" className="navbar-cta">
            Secure Plot
          </Link>
        </div>

        {/* Mobile menu button */}
        <button className="navbar-mobile-toggle" aria-label="Open menu">
          <span className="material-symbols-outlined">menu</span>
        </button>
      </div>
    </nav>
  );
}
