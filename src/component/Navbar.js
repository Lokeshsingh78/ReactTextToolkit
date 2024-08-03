import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';  
export default function Navbar(props) {
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('darkMode') === 'true');
  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
    localStorage.setItem('darkMode', darkMode);
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode);
  };
  return (
    <nav className={`navbar navbar-expand-lg ${darkMode ? 'bg-dark' : 'bg-light'}`}>
      <div className="container-fluid">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          </ul>
          <button className="btn btn-outline-primary" onClick={toggleDarkMode}>
            {darkMode ? '🌙 Dark Mode' : '🌞 Light Mode'}
          </button>
        </div>
      </div>
    </nav>
  );
}
Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string
};
