// src/components/CommunicationModal.jsx
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const CommunicationModal = ({ showModal, setShowModal, companies, setCompanies }) => {
  const [modalData, setModalData] = useState({
    type: '',
    date: '',
    notes: '',
    nextType: '', // New field for next scheduled communication type
    nextDate: '', // New field for next scheduled communication date
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setModalData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = () => {
    const newCompanies = companies.map((company) => {
      if (company.selected) {
        return {
          ...company,
          communications: [
            ...company.communications,
            {
              type: modalData.type,
              date: modalData.date,
              notes: modalData.notes,
            },
          ],
          nextCommunication: {
            type: modalData.nextType,
            date: modalData.nextDate,
          }, // Set the next scheduled communication
          highlight: 'none', // Reset highlight
          selected: false, // Deselect after submission
        };
      }
      return company;
    });

    setCompanies(newCompanies);
    setShowModal(false);
    setModalData({ type: '', date: '', notes: '', nextType: '', nextDate: '' }); // Reset modal data
  };

  return (
    <div className={`modal ${showModal ? 'show' : ''}`} style={{ display: showModal ? 'block' : 'none' }} tabIndex="-1" role="dialog">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header bg-info text-white">
            <h5 className="modal-title">Log New Communication</h5>
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
                value={modalData.type}
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
                value={modalData.date}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="notes">Add Notes</label>
              <textarea
                className="form-control"
                name="notes"
                value={modalData.notes}
                onChange={handleInputChange}
                rows={3}
              />
            </div>
            <div className="form-group">
              <label htmlFor="nextType">Next Scheduled Communication Type</label>
              <select
                className="form-control"
                name="nextType"
                value={modalData.nextType}
                onChange={handleInputChange}
              >
                <option value="">Select...</option>
                <option value="LinkedIn Post">LinkedIn Post</option>
                <option value="Email">Email</option>
                <option value="Phone Call">Phone Call</option>
                <option value="Meeting">Meeting</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="nextDate">Next Scheduled Communication Date</label>
              <input
                type="date"
                className="form-control"
                name="nextDate"
                value={modalData.nextDate}
                onChange={handleInputChange}
              />
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
  );
};

export default CommunicationModal;