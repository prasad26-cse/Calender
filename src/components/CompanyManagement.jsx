import React, { useState } from 'react';
import { Modal } from 'react-bootstrap'; // Make sure to install react-bootstrap
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faTrash } from '@fortawesome/free-solid-svg-icons';

const CompanyManagement = () => {
  const [companies, setCompanies] = useState([]);
  const [company, setCompany] = useState({
    name: '',
    location: '',
    linkedInProfile: '',
    emails: '',
    phoneNumbers: '',
    comments: '',
    communicationPeriodicity: '',
  });
  const [showModal, setShowModal] = useState(false);
  const [selectedCompany, setSelectedCompany] = useState(null);

  const handleChange = (e) => {
    setCompany({ ...company, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding company:', company);
    setCompanies([...companies, company]);
    setCompany({
      name: '',
      location: '',
      linkedInProfile: '',
      emails: '',
      phoneNumbers: '',
      comments: '',
      communicationPeriodicity: '',
    });
  };

  const handleDelete = (index) => {
    const newCompanies = companies.filter((_, i) => i !== index);
    setCompanies(newCompanies);
  };

  const handleView = (index) => {
    setSelectedCompany(companies[index]);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedCompany(null);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Company Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="name"
              placeholder="Company Name"
              value={company.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="location"
              placeholder="Location"
              value={company.location}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="linkedInProfile"
              placeholder="LinkedIn Profile"
              value={company.linkedInProfile}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="emails"
              placeholder="Emails (comma separated)"
              value={company.emails}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="phoneNumbers"
              placeholder="Phone Numbers (comma separated)"
              value={company.phoneNumbers}
              onChange={handleChange}
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="communicationPeriodicity"
              placeholder="Communication Periodicity"
              value={company.communicationPeriodicity}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            name="comments"
            placeholder="Comments"
            value={company.comments}
            onChange={handleChange}
            rows="3"
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">Add Company</button>
      </form>
      <ul className="list-group">
        {companies.map((comp, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
                        {comp.name}
            <div>
              <button className="btn btn-info btn-sm me-2" onClick={() => handleView(index)}>
                <FontAwesomeIcon icon={faEye} /> View
              </button>
              <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>
                <FontAwesomeIcon icon={faTrash} /> Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* Modal for viewing company details */}
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Company Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {selectedCompany && (
            <div>
              <h5>Name: {selectedCompany.name}</h5>
              <p><strong>Location:</strong> {selectedCompany.location}</p>
              <p><strong>LinkedIn Profile:</strong> {selectedCompany.linkedInProfile}</p>
              <p><strong>Emails:</strong> {selectedCompany.emails}</p>
              <p><strong>Phone Numbers:</strong> {selectedCompany.phoneNumbers}</p>
              <p><strong>Comments:</strong> {selectedCompany.comments}</p>
              <p><strong>Communication Periodicity:</strong> {selectedCompany.communicationPeriodicity}</p>
            </div>
          )}
        </Modal.Body>
        <Modal.Footer>
          <button className="btn btn-secondary" onClick={handleCloseModal}>Close</button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CompanyManagement;