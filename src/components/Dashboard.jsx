// Dashboard.jsx
import React, { useState } from 'react';
import CommunicationModal from './CommunicationModal'; // Import the new modal component
import Notifications from './Notifications'; // Import the Notifications component
import 'bootstrap/dist/css/bootstrap.min.css';

const Dashboard = () => {
  const [companies, setCompanies] = useState([
    {
      name: 'Company A',
      communications: [],
      nextCommunication: { type: '', date: '' },
      highlight: 'none',
      selected: false,
    },
    {
      name: 'Company B',
      communications: [],
      nextCommunication: { type: '', date: '' },
      highlight: 'none',
      selected: false,
    },
  ]);

  const [showModal, setShowModal] = useState(false);

  const handleCompanySelect = (index) => {
    const newCompanies = [...companies];
    newCompanies[index].selected = !newCompanies[index].selected;
    setCompanies(newCompanies);
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4 text-primary">Dashboard</h1>
      <button
        className="btn btn-success mb-3"
        onClick={() => setShowModal(true)}
      >
        Log Communication
      </button>
      <div className="row">
        {companies.map((company, index) => (
          <div
            key={index}
            className={`col-md-4 mb-4 company-card ${company.highlight === 'red' ? 'bg-danger text-white' : company.highlight === 'yellow' ? 'bg-warning' : 'bg-light'}`}
          >
            <div className="card p-3 shadow">
              <h5 className="card-title">
                <input
                  type="checkbox"
                  checked={company.selected}
                  onChange={() => handleCompanySelect(index)}
                />
                {company.name}
              </h5>
              <div className="card-body">
                <h6 className="card-subtitle mb-2 text-muted">Last Five Communications:</h6>
                {company.communications.length > 0 ? (
                  company.communications.map((comm, commIndex) => (
                    <div key={commIndex} className="communication">
                      <strong>{comm.type}</strong> - {comm.date} <br />
                      <small>{comm.notes}</small>
                    </div>
                  ))
                ) : (
                  <p>No communications logged.</p>
                )}
                <h6 className="mt-3">Next Scheduled Communication:</h6>
                <p className="font-weight-bold">{company.nextCommunication.type} - {company.nextCommunication.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Communication Modal */}
      <CommunicationModal
        showModal={showModal}
        setShowModal={setShowModal}
        companies={companies}
        setCompanies={setCompanies}
      />

      {/* Notifications Section */}
      {/* <Notifications companies={companies} /> */}
    </div>
  );
};

export default Dashboard;