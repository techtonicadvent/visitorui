import '../styles/BadgePrinter.css';

export default function BadgePrinter({ visitor }) {
  if (!visitor || !visitor.name) {
    return <div className="badge-placeholder">No visitor data to print</div>;
  }

  const handlePrint = () => {
    const printWindow = window.open('', '', 'width=800,height=600');
    const element = document.getElementById('badge-content');
    const printContent = element.innerHTML;
    
    printWindow.document.write(`
      <html>
        <head>
          <title>Print Badge</title>
          <style>
            body {
              font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
              margin: 0;
              padding: 20px;
            }
            .badge-container {
              display: flex;
              justify-content: center;
            }
            @media print {
              body { padding: 0; }
            }
            ${document.querySelector('style')?.innerText || ''}
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    printWindow.document.close();
    printWindow.print();
  };

  const handleBrowserPrint = () => {
    window.print();
  };

  return (
    <div className="badge-printer">
      <div className="printer-controls">
        <button onClick={handleBrowserPrint} className="btn-print btn-browser">
          🖨️ Print Badge
        </button>
        <button onClick={handlePrint} className="btn-print btn-pdf">
          📄 Download PDF
        </button>
      </div>

      <div id="badge-content" className="badge-container">
        <div className="badge">
          <div className="badge-header">
            <h3>VISITOR BADGE</h3>
          </div>

          <div className="badge-body">
            <div className="badge-photo">
              <span>📷</span>
            </div>

            <div className="badge-details">
              <div className="badge-item">
                <span className="badge-label">NAME</span>
                <span className="badge-value">{visitor.name}</span>
              </div>

              <div className="badge-item">
                <span className="badge-label">COMPANY</span>
                <span className="badge-value">{visitor.company}</span>
              </div>

              <div className="badge-item">
                <span className="badge-label">HOST</span>
                <span className="badge-value">{visitor.host}</span>
              </div>

              <div className="badge-item">
                <span className="badge-label">PURPOSE</span>
                <span className="badge-value">{visitor.purpose}</span>
              </div>

              <div className="badge-item">
                <span className="badge-label">DATE</span>
                <span className="badge-value">{new Date().toLocaleDateString()}</span>
              </div>
            </div>
          </div>

          <div className="badge-footer">
            <p>Please wear at all times</p>
            <p className="badge-time">{new Date().toLocaleTimeString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
