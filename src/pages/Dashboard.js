import { useState } from "react";
import '../styles/Dashboard.css';

export default function Dashboard(){
  const [visitors] = useState([
    {
      id: 1,
      name: "John Doe",
      company: "Tech Solutions",
      purpose: "Meeting",
      host: "Manager",
      status: "Checked In",
      checkInTime: "09:30 AM",
      phone: "+1 (555) 123-4567"
    },
    {
      id: 2,
      name: "Sarah Johnson",
      company: "Design Co",
      purpose: "Interview",
      host: "HR",
      status: "Checked Out",
      checkInTime: "10:15 AM",
      phone: "+1 (555) 234-5678"
    },
    {
      id: 3,
      name: "Michael Chen",
      company: "Consulting Inc",
      purpose: "Consultation",
      host: "Director",
      status: "Checked In",
      checkInTime: "11:00 AM",
      phone: "+1 (555) 345-6789"
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      company: "Marketing Plus",
      purpose: "Meeting",
      host: "Manager",
      status: "Checked In",
      checkInTime: "02:00 PM",
      phone: "+1 (555) 456-7890"
    }
  ]);

  const getStatusClass = (status) => {
    return status === "Checked In" ? "status-active" : "status-inactive";
  };

  const activeVisitors = visitors.filter(v => v.status === "Checked In").length;
  const totalVisitors = visitors.length;

  return (
    <div className="dashboard-container">
      <div className="dashboard-header">
        <h1>Visitor Dashboard</h1>
        <p>Real-time visitor management system</p>
      </div>

      <div className="stats-grid">
        <div className="stat-card">
          <div className="stat-icon">👥</div>
          <div className="stat-content">
            <div className="stat-label">Active Visitors</div>
            <div className="stat-value">{activeVisitors}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">📊</div>
          <div className="stat-content">
            <div className="stat-label">Total Today</div>
            <div className="stat-value">{totalVisitors}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">✅</div>
          <div className="stat-content">
            <div className="stat-label">Checked Out</div>
            <div className="stat-value">{totalVisitors - activeVisitors}</div>
          </div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">⏰</div>
          <div className="stat-content">
            <div className="stat-label">Peak Hours</div>
            <div className="stat-value peak-hours">10am to 2pm</div>
          </div>
        </div>
      </div>

      <div className="table-section">
        <h2>Visitor List</h2>
        <div className="table-wrapper">
          <table className="visitors-table">
            <thead>
              <tr>
                <th>Name</th>
                <th>Company</th>
                <th>Purpose</th>
                <th>Host</th>
                <th>Check-in Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {visitors.map((visitor) => (
                <tr key={visitor.id}>
                  <td>
                    <div className="visitor-name">
                      <span className="visitor-avatar">👤</span>
                      {visitor.name}
                    </div>
                  </td>
                  <td>{visitor.company}</td>
                  <td><span className="badge-purpose">{visitor.purpose}</span></td>
                  <td>{visitor.host}</td>
                  <td>{visitor.checkInTime}</td>
                  <td>
                    <span className={`status-badge ${getStatusClass(visitor.status)}`}>
                      {visitor.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="insights-section">
        <h2>Insights</h2>
        <div className="insights-grid">
          <div className="insight-card">
            <div className="insight-title">📈 Most Common Purpose</div>
            <div className="insight-value">Meeting (50%)</div>
          </div>
          <div className="insight-card">
            <div className="insight-title">🏢 Top Visiting Company</div>
            <div className="insight-value">Tech Solutions</div>
          </div>
          <div className="insight-card">
            <div className="insight-title">👔 Busiest Department</div>
            <div className="insight-value">Manager Office</div>
          </div>
        </div>
      </div>
    </div>
  );
}