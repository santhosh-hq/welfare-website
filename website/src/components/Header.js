import React from 'react';

const Header = () => (
    <header style={{ 
        padding: '20px', 
        backgroundColor: '#2e7d32', 
        color: 'white', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
    }}>
        <img src="download (1).png" alt="Logo" style={{ height: '70px', marginRight: '20px', borderRadius: '50px' }} />
        <h1 style={{ margin: 0 }}>Government of India - Farmers Welfare</h1>
    </header>
);

export default Header;
