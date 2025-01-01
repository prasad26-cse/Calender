// src/components/CommunicationMethodManagement.jsx
import React, { useState } from 'react';

const CommunicationMethodManagement = () => {
  const [methods, setMethods] = useState([
    { name: 'LinkedIn Post', description: 'Post on LinkedIn', sequence: 1, mandatory: true },
    { name: 'LinkedIn Message', description: 'Message on LinkedIn', sequence: 2, mandatory: false },
    { name: 'Email', description: 'Send an email', sequence: 3, mandatory: false },
    { name: 'Phone Call', description: 'Call the company', sequence: 4, mandatory: false },
    { name: 'Other', description: 'Other methods', sequence: 5, mandatory: false },
  ]);

  const [method, setMethod] = useState({ name: '', description: '', sequence: '', mandatory: false });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setMethod({ ...method, [name]: type === 'checkbox' ? checked : value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Adding communication method:', method);
    setMethods([...methods, method]);
    setMethod({ name: '', description: '', sequence: '', mandatory: false });
  };

  const handleDelete = (index) => {
    const newMethods = methods.filter((_, i) => i !== index);
    setMethods(newMethods);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center text-primary">Communication Method Management</h2>
      <form onSubmit={handleSubmit} className="mb-4">
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="name"
              placeholder="Method Name"
              value={method.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="description"
              placeholder="Description"
              value={method.description}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 mb-3">
            <input
              className="form-control"
              name="sequence"
              type="number"
              placeholder="Sequence"
              value={method.sequence}
              onChange={handleChange}
              required
            />
          </div>
          <div className="col-md-6 mb-3 form-check">
            <input
              className="form-check-input"
              name="mandatory"
              type="checkbox"
              checked={method.mandatory}
              onChange={handleChange}
            />
            <label className="form-check-label">Mandatory</label>
          </div>
        </div>
        <button type="submit" className="btn btn-success btn-block">Add Method</button>
      </form>
      <ul className="list-group">
        {methods.map((m, index) => (
          <li key={index} className={`list-group-item d-flex justify-content-between align-items-center ${m.mandatory ? 'bg-warning' : 'bg-light'}`}>
            <span className={m.mandatory ? 'font-weight-bold' : ''}>
              {m.name} - {m.description} (Sequence: {m.sequence}) {m.mandatory ? ' [Mandatory]' : ''}
            </span>
            <button className="btn btn-danger btn-sm" onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommunicationMethodManagement;