import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

const ChooseLogin = () => {
  return (
    <div className="auth-page-wrapper">
      <div className="auth-card" role="region" aria-labelledby="choose-register-title">
        <header>
          <h1 id="choose-register-title" className="auth-title">Register</h1>
          <p className="auth-subtitle">Pick how you want to join the platform.</p>
        </header>
        <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          <Link to="/user/login" className="auth-submit glass-style" style={{textDecoration:'none'}}>
            Login as normal user
          </Link>
          <Link to="/food-partner/login" className="auth-submit glass-style" style={{textDecoration:'none', background:'var(--color-surface-alt)', color:'var(--color-text)', border:'1px solid var(--color-border)'}}>
            Login as food partner
          </Link>
        </div>
        <div className="auth-alt-action" style={{marginTop:'4px'}}>
          Don't have an account? <Link to="/register">Sign up</Link>   
        </div>
      </div>
    </div>
  );
};

export default ChooseLogin;