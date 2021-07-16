import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiPackage } from 'react-icons/fi';

function Login() {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const checkEmail = () => (/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(emailInput));
  const minLength = 6;
  const checkPass = () => passwordInput.length > minLength;

  const handleClick = () => {
    const user = { email: emailInput };
    localStorage.setItem('user', JSON.stringify(user));
  };

  return (
    <section className="login-container">
      <FiPackage size="4em" />
      <h2 className="title">Delivery controller</h2>
      <h4 className="login-text">Login</h4>
      <input
        ClassName="inputs"
        name="email"
        type="email"
        data-testid="email-input"
        placeholder="Your email"
        value={emailInput}
        autoComplete="none"
        onChange={(e) => setEmailInput(e.target.value)}
      />
      <input
        name="password"
        type="password"
        data-testid="password-input"
        minLength="6"
        placeholder="Your password"
        onChange={(e) => setPasswordInput(e.target.value)}
        ClassName="inputs"
      />
      <Link to="/delivery-list">
        <button
          type="button"
          data-testid="login-submit-btn"
          disabled={!(checkEmail() && checkPass())}
          onClick={handleClick}
          className="login-btn"
        >
          Next
        </button>
      </Link>
    </section>
  );
}

export default Login;
