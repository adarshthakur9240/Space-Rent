import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <Link to="/" className="footer-logo">LUNATERRA</Link>
          <p className="footer-copyright">
            © 2024 LUNATERRA ARCHIVES. COORDINATES: 0.6741° N, 23.4730° E
          </p>
        </div>

        <div className="footer-links">
          <a href="#" className="footer-link">Protocol</a>
          <a href="#" className="footer-link">Privacy</a>
          <a href="#" className="footer-link">Orbit Status</a>
          <a href="#" className="footer-link">Support</a>
        </div>

        <div className="footer-icons">
          <span className="material-symbols-outlined footer-icon">public</span>
          <span className="material-symbols-outlined footer-icon">rocket_launch</span>
          <span className="material-symbols-outlined footer-icon">verified</span>
        </div>
      </div>
    </footer>
  );
}
