import React, { useEffect, useState } from 'react';
import './Dashboard.css';

const Dashboard = () => {
  const [data, setData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const rowsPerPage = 5;

  // Simulated logged-in user name (replace with auth/user context if available)
  const userName = "Santhosh Kumar";

  useEffect(() => {
    fetch('/farmersData.json')
      .then(res => res.json())
      .then(json => {
        setData(json);
        setFiltered(json);
      })
      .catch(err => console.error('Fetch error:', err));
  }, []);

  useEffect(() => {
    const filteredData = data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFiltered(filteredData);
    setCurrentPage(1);
  }, [searchTerm, data]);

  const totalPages = Math.ceil(filtered.length / rowsPerPage);
  const startIndex = (currentPage - 1) * rowsPerPage;
  const currentData = filtered.slice(startIndex, startIndex + rowsPerPage);

  return (
    <div className="dashboard-container" style={{ padding: '2rem', maxWidth: '900px', margin: 'auto' }}>
      {/* 👋 Greeting */}
      <h2 style={{ marginBottom: '0.5rem', color: '#2c3e50' }}>Hello, {userName}! 👋</h2>
      <p style={{ marginBottom: '1.5rem', color: '#555' }}>
        Welcome back to your dashboard. Here's your latest farming data.
      </p>

      <h1>Farmers Data Dashboard</h1>

      <input
        type="text"
        placeholder="Search by name, state, crop, year..."
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
        style={{ width: '100%', padding: '10px', marginBottom: '1rem', borderRadius: '5px', border: '1px solid #ccc' }}
      />

      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr style={{ backgroundColor: '#eee' }}>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Farmer ID</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Name</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>State</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Crop</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Area (Ha)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Production (Quintals)</th>
            <th style={{ border: '1px solid #ddd', padding: '8px' }}>Year</th>
          </tr>
        </thead>
        <tbody>
          {currentData.length > 0 ? currentData.map(item => (
            <tr key={item.farmerId}>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.farmerId}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.state}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.crop}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.areaHectares}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.productionQuintals}</td>
              <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.year}</td>
            </tr>
          )) : (
            <tr><td colSpan="7" style={{ textAlign: 'center', padding: '1rem' }}>No records found.</td></tr>
          )}
        </tbody>
      </table>

      <div style={{ marginTop: '1rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <button
          onClick={() => setCurrentPage(p => Math.max(p - 1, 1))}
          disabled={currentPage === 1}
          style={{ padding: '8px 12px', cursor: currentPage === 1 ? 'not-allowed' : 'pointer' }}
        >
          Prev
        </button>

        <span>Page {currentPage} of {totalPages}</span>

        <button
          onClick={() => setCurrentPage(p => Math.min(p + 1, totalPages))}
          disabled={currentPage === totalPages}
          style={{ padding: '8px 12px', cursor: currentPage === totalPages ? 'not-allowed' : 'pointer' }}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
