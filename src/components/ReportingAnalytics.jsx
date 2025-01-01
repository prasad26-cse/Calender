import React, { useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import jsPDF from 'jspdf';
import 'bootstrap/dist/css/bootstrap.min.css';

// Register the necessary components
Chart.register(LinearScale, CategoryScale, BarElement, Title, Tooltip, Legend);

const ReportingAnalytics = ({ companies }) => {
  const [selectedCompany, setSelectedCompany] = useState('');
  const [dateRange, setDateRange] = useState({ start: '', end: '' });
  const [communicationMethod, setCommunicationMethod] = useState('');
  const [filtersEnabled, setFiltersEnabled] = useState(false);
  const [activities, setActivities] = useState([]);
  const [sortCriteria, setSortCriteria] = useState('date');

  // Placeholder data for reports
  const communicationFrequencyData = {
    'LinkedIn Post': 10,
    'Email': 15,
    'Phone Call': 5,
  };

  const engagementMetrics = {
    'Email': 80,
    'Phone Call': 60,
    'LinkedIn Post': 40,
  };

  const overdueTrends = {
    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
    datasets: [
      {
        label: 'Overdue Communications',
        data: [5, 10, 3, 8],
        backgroundColor: 'rgba(255, 99, 132, 0.6)',
      },
    ],
  };

  // Sample activity data
  const sampleActivities = [
    { date: '2023-09-01T10:00:00Z', user: 'Alice', company: 'Company A', method: 'Email', notes: 'Initial contact made.' },
    { date: '2023-09-02T11:00:00Z', user: 'Bob', company: 'Company B', method: 'Phone Call', notes: 'Discussed project details.' },
    { date: '2023-09-03T12:00:00Z', user: 'Charlie', company: 'Company C', method: 'LinkedIn Post', notes: 'Follow-up on project.' },
    { date: '2023-09-04T13:00:00Z', user: 'Alice', company: 'Company A', method: 'Email', notes: 'Sent proposal.' },
    { date: '2023-09-05T14:00:00Z', user: 'Bob', company: 'Company B', method: 'Phone Call', notes: 'Follow-up on proposal.' },
  ];

  useEffect(() => {
    // Simulate adding sample activities to the log
    const interval = setInterval(() => {
      const randomActivity = sampleActivities[Math.floor(Math.random() * sampleActivities.length)];
      setActivities((prevActivities) => [...prevActivities, randomActivity]);
    }, 20000); // Add a new activity every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const sortedActivities = [...activities].sort((a, b) => {
    if (sortCriteria === 'date') {
      return new Date(b.date) - new Date(a.date);
    } else if (sortCriteria === 'user') {
      return a.user.localeCompare(b.user);
    } else if (sortCriteria === 'company') {
      return a.company.localeCompare(b.company);
    }
    return 0;
  });

  const handleCompanyChange = (e) => {
    setSelectedCompany(e.target.value);
  };

  const handleDateRangeChange = (e) => {
    const { name, value } = e.target;
    setDateRange((prev) => ({ ...prev, [name]: value }));
  };

  const handleMethodChange = (e) => {
    setCommunicationMethod(e.target.value);
  };

  const handleFiltersToggle = () => {
    setFiltersEnabled((prev) => !prev);
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text('Reporting and Analytics', 20, 20);
    doc.setFontSize(12);
    doc.text('Communication Frequency:', 20, 40);

    let y = 50;
    for (const [method, frequency] of Object.entries(communicationFrequencyData)) {
      doc.text(`${method}: ${frequency}`, 20, y);
      y += 10;
    }

    doc.save('reporting_analytics.pdf');
  };

  const downloadCSV = () => {
    const csvRows = [];
    const headers = ['Date', 'User ', 'Company', 'Communication Method', 'Notes'];
    csvRows.push(headers.join(','));

    activities.forEach(activity => {
      const row = [
        new Date(activity.date).toLocaleString(),
        activity.user,
        activity.company,
        activity.method,
        activity.notes
      ];
      csvRows.push(row.join(','));
    });

    const csvString = csvRows.join('\n');
    const blob = new Blob([csvString], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.setAttribute('href', url);
    a.setAttribute('download', 'activity_log.csv');
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-primary">Reporting and Analytics</h2>

      {/* Filters Section */}
      <div className="mb-4">
        <h5>Filters</h5>
        <div className="form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="enableFilters"
            checked={filtersEnabled}
            onChange={handleFiltersToggle}
          />
          <label className="form-check-label" htmlFor="enableFilters">
            Enable Filters
          </label>
        </div>

        {filtersEnabled && (
          <>
            <div className="form-group">
              <label htmlFor="companySelect">Select Company</label>
              <select
                className="form-control"
                id="companySelect"
                value={selectedCompany}
                onChange={handleCompanyChange}
              >
                <option value="">Select a company</option>
                {companies.map((company) => (
                  <option key={company.id} value={company.name}>
                    {company.name}
                  </option>
                ))}
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="dateRangeStart">Start Date</label>
              <input
                type="date"
                className="form-control"
                id="dateRangeStart"
                name="start"
                value={dateRange.start}
                onChange={handleDateRangeChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="dateRangeEnd">End Date</label>
              <input
                type="date"
                className="form-control"
                id="dateRangeEnd"
                name="end"
                value={dateRange.end}
                onChange={handleDateRangeChange}
              />
            </div>

            <div className="form-group">
              <label htmlFor="communicationMethod">Communication Method</label>
              <select
                className="form-control"
                id="communicationMethod"
                value={communicationMethod}
                onChange={handleMethodChange}
              >
                <option value="">Select a method</option>
                <option value="Email">Email</option>
                <option value="Phone Call">Phone Call</option>
                <option value="LinkedIn Post">LinkedIn Post</option>
              </select>
            </div>
          </>
        )}
      </div>

      {/* Communication Frequency Report */}
      <div className="mb-4">
        <h5>Communication Frequency Report</h5>
        <Bar
          data={{
            labels: Object.keys(communicationFrequencyData),
            datasets: [
              {
                label: 'Frequency',
                data: Object.values(communicationFrequencyData),
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
              },
            ],
          }}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>

      {/* Engagement Effectiveness Dashboard */}
      <div className="mb-4">
        <h5>Engagement Effectiveness Dashboard</h5>
        <ul className="list-group">
        {Object.entries(engagementMetrics).map(([method, percentage]) => (
            <li key={method} className="list-group-item">
              {method}: {percentage}% successful responses
            </li>
          ))}
        </ul>
      </div>

      {/* Overdue Communication Trends */}
      <div className="mb-4">
        <h5>Overdue Communication Trends</h5>
        <Bar
          data={overdueTrends}
          options={{
            responsive: true,
            scales: {
              y: {
                beginAtZero: true,
              },
            },
          }}
        />
      </div>

      {/* Downloadable Reports */}
      <div className="mb-4">
        <h5>Downloadable Reports</h5>
        <button className="btn btn-success" onClick={downloadPDF}>
          Download PDF Report
        </button>
        <button className="btn btn-info ml-2" onClick={downloadCSV}>
          Download CSV Report
        </button>
      </div>

      {/* Real-Time Activity Log */}
      <div className="mb-4">
        <h5>Real-Time Activity Log</h5>
        <div className="form-group">
          <label htmlFor="sortCriteria">Sort By</label>
          <select
            className="form-control"
            id="sortCriteria"
            value={sortCriteria}
            onChange={(e) => setSortCriteria(e.target.value)}

          >
            <option value="date">Date</option>
            <option value="user">User </option>
            <option value="company">Company</option>
          </select>
        </div>

        <table className="table table-bordered">
          <thead>
            <tr>
              <th>Date</th>
              <th>User</th>
              <th>Company</th>
              <th>Communication Method</th>
              <th>Notes</th>
            </tr>
          </thead>
          <tbody>
            {sortedActivities.map((activity, index) => (
              <tr key={index}>
                <td>{new Date(activity.date).toLocaleString()}</td>
                <td>{activity.user}</td>
                <td>{activity.company}</td>
                <td>{activity.method}</td>
                <td>{activity.notes}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportingAnalytics;