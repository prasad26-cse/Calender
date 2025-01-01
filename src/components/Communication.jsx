// src/components/Communication.jsx
import React, { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap'; // Import Modal, Button, and Form

const Communication = ({ show, onHide, onCommunicationPerformed, selectedCompanies }) => {
  const [communicationType, setCommunicationType] = useState('');
  const [communicationDate, setCommunicationDate] = useState('');
  const [notes, setNotes] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const newCommunication = {
      type: communicationType,
      date: communicationDate,
      notes: notes,
    };

    // Call the parent function to handle the new communication
    onCommunicationPerformed(newCommunication);

    // Reset the form fields
    setCommunicationType('');
    setCommunicationDate('');
    setNotes('');
  };

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton className="bg-info text-white">
        <Modal.Title>Log Communication</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="communicationType">
            <Form.Label>Type of Communication</Form.Label>
            <Form.Control
              as="select"
              value={communicationType}
              onChange={(e) => setCommunicationType(e.target.value)}
              required
            >
              <option value="">Select...</option>
              <option value="LinkedIn Post">LinkedIn Post</option>
              <option value="Email">Email</option>
              <option value="Phone Call">Phone Call</option>
              <option value="Other">Other</option>
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="communicationDate">
            <Form.Label>Date of Communication</Form.Label>
            <Form.Control
              type="date"
              value={communicationDate}
              onChange={(e) => setCommunicationDate(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group controlId="notes">
            <Form.Label>Notes</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </Form.Group>
          <Button variant="success" type="submit">
            Log Communication
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default Communication;