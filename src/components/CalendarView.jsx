// src/components/CalendarView.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CalendarView = ({ companies, onAddCommunication }) => {
  const today = new Date();
  const pastCommunications = [];
  const upcomingCommunications = [];

  // Organize communications into past and upcoming
  companies.forEach(company => {
    company.communications.forEach(comm => {
      const commDate = new Date(comm.date);
      if (commDate < today) {
        pastCommunications.push({ company: company.name, ...comm });
      } else if (commDate >= today) {
        upcomingCommunications.push({ company: company.name, ...comm });
      }
    });
  });

  // State for the modal
  const [showModal, setShowModal] = useState(false);
  const [newCommunication, setNewCommunication] = useState({
    type: '',
    date: today.toISOString().split('T')[0], // Default to today's date
    notes: '',
    company: '', // To track which company the communication is for
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCommunication((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    onAddCommunication(newCommunication);
    setShowModal(false);
    setNewCommunication({ type: '', date: today.toISOString().split('T')[0], notes: '', company: '' }); // Reset form
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Calendar View</h2>

      <div className="row">
        <div className="col-md-6 mb-4">
          <div className="card border-primary">
            <div className="card-header bg-primary text-white">
              <h5>Past Communications</h5>
            </div>
            <div className="card-body">
              {pastCommunications.length > 0 ? (
                <ul className="list-group">
                  {pastCommunications.map((comm, index) => (
                    <li key={index} className="list-group-item">
                      <strong>{comm.company}</strong>: {comm.type} on {comm.date} <br />
                      <small>{comm.notes}</small>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No past communications found.</p>
              )}
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card border-success">
            <div className="card-header bg-success text-white">
              <h5>Upcoming Communications</h5>
            </div>
            <div className="card-body">
              {upcomingCommunications.length > 0 ? (
                <ul className="list-group">
                  {upcomingCommunications.map((comm, index) => (
                    <li key={index} className="list-group-item">
                      <strong>{comm.company}</strong>: {comm.type} on {comm.date} <br />
                      <small>{comm.notes}</small>
                    </li>
                  ))}
                </ul>
              ) : (
                <p>No upcoming communications found.</p>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Button to add new communication */}
      <div className="text-center mb-4">
        <button className="btn btn-primary" onClick={() => setShowModal(true)}>
          Add New Communication
        </button>
      </div>

      {/* Modal for adding new communication */}
      <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-info text-white">
              <h5 className="modal-title">Add New Communication</h5>
              <button type="button" className="close" onClick={() => setShowModal(false)}>
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="form-group">
              <label htmlFor="type">Type of Communication</label>
                <select
                  className="form-control"
                  name="type"
                  value={newCommunication.type}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select...</option>
                  <option value="LinkedIn Post">LinkedIn Post</option>
                  <option value="Email">Email</option>
                  <option value="Phone Call">Phone Call</option>
                  <option value="Meeting">Meeting</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="date">Date of Communication</label>
                <input
                  type="date"
                  className="form-control"
                  name="date"
                  value={newCommunication.date}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="notes">Notes</label>
                <textarea
                  className="form-control"
                  name="notes"
                  value={newCommunication.notes}
                  onChange={handleInputChange}
                />
              </div>
              <div className="form-group">
                <label htmlFor="company">Select Company</label>
                <select
                  className="form-control"
                  name="company"
                  value={newCommunication.company}
                  onChange={handleInputChange}
                  required
                >
                  <option value="">Select...</option>
                  {companies.map((company, index) => (
                    <option key={index} value={company.name}>
                      {company.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleSubmit}>
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalendarView;