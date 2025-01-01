import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import { useState } from 'react';
import CompanyManagement from './components/CompanyManagement'; // Import CompanyManagement component
import CommunicationMethodManagement from './components/CommunicationMethodManagement'; // Import CommunicationMethodManagement component
 import Dashboard from './components/dashboard';// Ensure correct case
import Notifications from './components/Notifications'; // Import Notifications component
import CalendarView from './components/CalendarView'; // Import CalendarView component
import ReportingAnalytics from './components/ReportingAnalytics'; // Import ReportingAnalytics component
import { Component } from 'react';

function App() {
  const [companies, setCompanies] = useState([
    {
      name: 'Company A',
      communications: [
        { type: 'LinkedIn Post', date: '2023-09-01', notes: 'Initial contact' },
        { type: 'Email', date: '2023-09-05', notes: 'Follow-up' },
      ],
      nextCommunication: { type: 'Email', date: '2023-09-10' },
      overdue: false,
      dueToday: false,
    },
    {
      name: 'Company B',
      communications: [
        { type: 'Phone Call', date: '2023-09-02', notes: 'Discussed project' },
        { type: 'LinkedIn Message', date: '2023-09-06', notes: 'Sent proposal' },
      ],
      nextCommunication: { type: 'LinkedIn Post', date: '2023-09-08' },
      overdue: true,
      dueToday: false,
    },
  ]);

  const [showCommunicationModal, setShowCommunicationModal] = useState(false); // State to manage modal visibility
  const [selectedCompany, setSelectedCompany] = useState(null); // State to manage the selected company

  const handleCommunicationPerformed = (newCommunication) => {
    if (selectedCompany) {
      const updatedCompanies = companies.map((company) => {
        if (company.name === selectedCompany.name) {
          return {
            ...company,
            communications: [...company.communications, newCommunication],
            nextCommunication: {
              type: newCommunication.type,
              date: newCommunication.date,
            },
          };
        }
        return company;
      });
      setCompanies(updatedCompanies); // Update the companies state
    }
    setShowCommunicationModal(false); // Close the modal after logging
  };

  const handleAddCommunication = (newCommunication) => {
    // Update the companies state with the new communication
    const updatedCompanies = companies.map((company) => {
      if (company.name === newCommunication.company) {
        return {
          ...company,
          communications: [...company.communications, newCommunication],
        };
      }
      return company;
    });
    setCompanies(updatedCompanies);
  };

  return (
    <div className="App">
      <header className="bg-white text-center py-3">
        <nav>
          <ul className="list-inline">
            <li className="list-inline-item">
              <a href="#company-management" className="text-purple text-decoration-none">Company Management</a>
            </li>
            <li className="list-inline-item">
              <a href="#communication-method" className="text-purple text-decoration-none">Communication</a>
            </li>
            <li className="list-inline-item">
              <a href="#dashboard" className="text-purple text-decoration-none">Dashboard</a>
            </li>
            <li className="list-inline-item">
              <a href="#notifications" className="text-purple text-decoration-none">Notifications</a>
            </li>
            <li className="list-inline-item">
              <a href="#calendar" className="text-purple text-decoration-none">Calendar</a>
            </li>
            <li className="list-inline-item">
              <a href="#reporting" className="text-purple text-decoration-none">Report</a>
            </li>
          </ul>
        </nav>
      </header>
      <h1 className="text-purple bg-white text-center py-3">Calendar Applications For Communication Tracking</h1>
      <div className="container mt-4">
        {/* Company Management Module */}
        <div className="border border-primary rounded p-3 mb-4 bg-light" id="company-management">
        <h5 className="text-success">Company Management</h5>
          <CompanyManagement />
        </div>

        {/* Communication Method Management Module */}
        <div className="border border-info rounded p-3 mb-4 bg-light" id="communication-method">
          <h5 className="text-success">Communication Method Management</h5>
          <CommunicationMethodManagement />
        </div>

        {/* Dashboard Module */}
        <div className="border border-warning rounded p-3 mb-4 bg-light" id="dashboard">
          <h5 className="text-success">Dashboard</h5>
          <Dashboard companies={companies} onCommunicationPerformed={handleCommunicationPerformed} />
        </div>

        {/* Notifications Module */}
        <div className="border border-danger rounded p-3 mb-4 bg-light" id="notifications">
          <h5 className="text-success">Notifications</h5>
          <Notifications companies={companies} />
        </div>

        {/* Calendar View Component */}
        <div className="border border-secondary rounded p-3 mb-4 bg-light" id="calendar">
          <h5 className="text-success">Calendar View</h5>
          <CalendarView companies={companies} onAddCommunication={handleAddCommunication} />
        </div>

        {/* Reporting and Analytics Component */}
        <div className="border border-dark rounded p-3 mb-4 bg-light" id="reporting">
          <h5 className="text-success">Reporting and Analytics</h5>
          <ReportingAnalytics companies={companies} />
        </div>
      </div>
    </div>
  );
}

export default App;