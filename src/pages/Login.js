import { useState } from "react";
import '../styles/Login.css';

export default function Login(){
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      if (email && password) {
        alert('Login successful!');
        setEmail('');
        setPassword('');
      } else {
        alert('Please fill in all fields');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-card">
          <div className="login-header">
            <div className="login-icon">🔐</div>
            <h1>Admin Login</h1>
            <p>Visitor Management System</p>
          </div>

          <form className="login-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            <div className="remember-forgot">
              <label className="remember">
                <input type="checkbox" />
                Remember me
              </label>
              <a href="#forgot" className="forgot-link">Forgot Password?</a>
            </div>

            <button 
              type="submit" 
              className="login-button"
              disabled={loading}
            >
              {loading ? 'Logging in...' : 'Sign In'}
            </button>
          </form>

          <div className="login-footer">
            <p>Demo Credentials:</p>
            <p className="demo-creds">
              Email: admin@example.com<br/>
              Password: demo123
            </p>
          </div>
        </div>

        <div className="login-sidebar">
          <h2>VisitorHub</h2>
          <p>Streamline your visitor experience with our modern management system</p>
          <ul className="features-list">
            <li>✓ Quick visitor check-in</li>
            <li>✓ Digital QR passes</li>
            <li>✓ Badge printing</li>
            <li>✓ Real-time tracking</li>
            <li>✓ Analytics dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
}