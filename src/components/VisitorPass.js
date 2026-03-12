import '../styles/VisitorPass.css';

export default function VisitorPass({ visitor }) {
  if (!visitor || !visitor.name) {
    return <div className="pass-placeholder">No visitor data to display</div>;
  }

  return (
    <div className="visitor-pass">
      <div className="pass-header">
        <h2>Visitor Pass</h2>
      </div>
      
      <div className="pass-content">
        <div className="pass-info">
          <div className="info-item">
            <label>Name:</label>
            <span>{visitor.name}</span>
          </div>
          <div className="info-item">
            <label>Email:</label>
            <span>{visitor.email}</span>
          </div>
          <div className="info-item">
            <label>Phone:</label>
            <span>{visitor.phone}</span>
          </div>
          <div className="info-item">
            <label>Company:</label>
            <span>{visitor.company}</span>
          </div>
          <div className="info-item">
            <label>Host/Department:</label>
            <span>{visitor.host}</span>
          </div>
          <div className="info-item">
            <label>Purpose:</label>
            <span>{visitor.purpose}</span>
          </div>
          <div className="info-item">
            <label>Check-in Time:</label>
            <span>{new Date().toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="pass-footer">
        <p>Please keep this pass during your visit</p>
      </div>
    </div>
  );
}
