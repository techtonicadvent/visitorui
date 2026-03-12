import { useState } from "react";
import VisitorPass from "../components/VisitorPass";
import BadgePrinter from "../components/BadgePrinter";
import '../styles/Checkin.css';

export default function Checkin(){
  const [visitor, setVisitor] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [visitationHistiry, setVistationHistory] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setVisitor({ ...visitor, [name]: value });
  };

  const handleGeneratePass = (e) => {
    e.preventDefault();
    if (visitor.name && visitor.email && visitor.phone && visitor.host) {
      setShowPass(true);
      setVistationHistory([...visitationHistiry, { ...visitor, checkInTime: new Date().toLocaleString() }]);
    } else {
      alert('Please fill all required fields');
    }
  };

  const resetForm = () => {
    setVisitor({});
    setShowPass(false);
  };

  return (
    <div className="checkin-container">
      <div className="checkin-content">
        <h1>Visitor Check-in</h1>
        <p className="subtitle">Register your visit and generate your digital pass</p>

        {!showPass ? (
          <form className="checkin-form" onSubmit={handleGeneratePass}>
            <div className="form-section">
              <h3>Personal Information</h3>
              <div className="form-group">
                <label>Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={visitor.name || ''}
                  onChange={handleInputChange}
                  placeholder="John Doe"
                  required
                />
              </div>

              <div className="form-row">
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={visitor.email || ''}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Phone *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={visitor.phone || ''}
                    onChange={handleInputChange}
                    placeholder="+1 (555) 000-0000"
                    required
                  />
                </div>
              </div>

              <div className="form-group">
                <label>Company</label>
                <input
                  type="text"
                  name="company"
                  value={visitor.company || ''}
                  onChange={handleInputChange}
                  placeholder="Acme Corporation"
                />
              </div>
            </div>

            <div className="form-section">
              <h3>Visit Details</h3>
              <div className="form-row">
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Host/Department *</label>
                  <input
                    type="text"
                    name="host"
                    value={visitor.host || ''}
                    onChange={handleInputChange}
                    placeholder="Manager Name or Department"
                    required
                  />
                </div>
                <div className="form-group" style={{ flex: 1 }}>
                  <label>Purpose of Visit *</label>
                  <select
                    name="purpose"
                    value={visitor.purpose || ''}
                    onChange={handleInputChange}
                    required
                  >
                    <option value="">Select Purpose</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Interview">Interview</option>
                    <option value="Delivery">Delivery</option>
                    <option value="Maintenance">Maintenance</option>
                    <option value="Consultation">Consultation</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label>Additional Notes</label>
                <textarea
                  name="notes"
                  value={visitor.notes || ''}
                  onChange={handleInputChange}
                  placeholder="Any additional information..."
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div className="form-actions">
              <button type="submit" className="btn-submit">
                ✓ Generate Visitor Pass
              </button>
            </div>
          </form>
        ) : (
          <div className="pass-section">
            <VisitorPass visitor={visitor} />
            <BadgePrinter visitor={visitor} />
            <div className="form-actions">
              <button onClick={resetForm} className="btn-reset">
                ← Check-in Another Visitor
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}