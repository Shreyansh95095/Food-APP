import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

const ChooseAuth = () => {
  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="choose-register-title">
        <header>
          <h1 id="choose-register-title" className="auth-title">Register</h1>
          <p className="auth-subtitle">Pick how you want to join the platform.</p>
        </header>
        <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          <Link to="/login" className="auth-submit glass-style" style={{textDecoration:'none' }}>
            Login
          </Link>
          <Link to="/register" className="auth-submit glass-style" style={{textDecoration:'none', }}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseAuth;