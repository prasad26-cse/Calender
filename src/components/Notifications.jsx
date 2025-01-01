// Notifications.jsx
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Notifications = ({ companies }) => {
  // Filter overdue and due communications
  const today = new Date().toISOString().split('T')[0]; // Get today's date in YYYY-MM-DD format
  const overdueCommunications = companies.filter(company =>
    company.communications.some(comm => new Date(comm.date) < new Date() && comm.date !== '')
  );

  const todaysCommunications = companies.filter(company =>
    company.communications.some(comm => comm.date === today)
  );

  const overdueCount = overdueCommunications.length;
  const todaysCount = todaysCommunications.length;

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Notifications</h2>
      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card border-danger">
            <div className="card-header bg-danger text-white">
              <h5>Overdue Communications</h5>
              <span className="badge badge-light">{overdueCount}</span>
            </div>
            <div className="card-body">
              {overdueCount > 0 ? (
                <ul className="list-group">
                  {overdueCommunications.map((company, index) => (
                    <li key={index} className="list-group-item">
                      {company.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No overdue communications.</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card border-warning">
            <div className="card-header bg-warning text-dark">
              <h5>Today's Communications</h5>
              <span className="badge badge-light">{todaysCount}</span>
            </div>
            <div className="card-body">
              {todaysCount > 0 ? (
                <ul className="list-group">
                  {todaysCommunications.map((company, index) => (
                    <li key={index} className="list-group-item">
                      {company.name}
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No communications due today.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;