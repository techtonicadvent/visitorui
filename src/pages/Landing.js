import { Link } from 'react-router-dom';
import '../styles/Landing.css';

export default function Landing() {
  return (
    <div className="landing">
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to VisitorHub</h1>
          <p>Streamline your visitor management with modern check-in and badge printing</p>
          <div className="hero-buttons">
            <Link to="/checkin" className="btn btn-primary">Quick Check-in</Link>
            <Link to="/dashboard" className="btn btn-secondary">View Dashboard</Link>
          </div>
        </div>
      </section>

      <section className="features">
        <h2>Our Features</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">📋</div>
            <h3>Easy Check-in</h3>
            <p>Quick visitor registration with automated form validation</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🎫</div>
            <h3>Digital Pass</h3>
            <p>Generate QR codes for seamless visitor verification</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🏷️</div>
            <h3>Badge Printing</h3>
            <p>Print professional visitor badges instantly</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">📊</div>
            <h3>Analytics</h3>
            <p>Track visitor data and generate insights</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🔐</div>
            <h3>Security</h3>
            <p>Secure visitor information with QR authentication</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">⚡</div>
            <h3>Fast Processing</h3>
            <p>Real-time visitor management and tracking</p>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Get Started Today</h2>
        <p>Manage your visitors efficiently</p>
        <Link to="/checkin" className="btn btn-large">Start Check-in Now</Link>
      </section>
    </div>
  );
}
