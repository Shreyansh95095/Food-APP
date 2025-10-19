import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/auth-shared.css';

const ChooseRegister = () => {
  return (
    <div className="auth-page-wrapper">
      
      <div className="auth-card" role="region" aria-labelledby="choose-register-title">
        <header>
          <h1 id="choose-register-title" className="auth-title">Register</h1>
          <p className="auth-subtitle">Pick how you want to join the platform.</p>
        </header>
        <div style={{display:'flex', flexDirection:'column', gap:'16px'}}>
          
          {/* Apply the base auth-submit class and the new glass-style modifier */}
          <Link
            to="/user/register"
            className="auth-submit glass-style"
            style={{textDecoration:'none'}}
          >
            Register as normal user
          </Link>
          
          <Link
            to="/food-partner/register"
            className="auth-submit glass-style"
            style={{textDecoration:'none'}}
          >
            Register as food partner
          </Link>
          
        </div>
        <div className="auth-alt-action" style={{marginTop:'4px'}}>
          Already have an account? <Link to="/login">Sign in</Link>
        </div>
      </div>
    </div>
  );
};

export default ChooseRegister;