import React from 'react';

export default function Login() {
  const handleLogin = () => {
    // This creates a temporary token so the Dashboard stops throwing the 400 error!
    localStorage.setItem('token', 'temp-demo-token-123');
    // Force the app to reload and go to the dashboard
    window.location.href = '/dashboard';
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px', fontFamily: 'sans-serif' }}>
      <h1>Project Manager Login</h1>
      <p>Click below to enter the workspace.</p>
      <button 
        onClick={handleLogin}
        style={{ padding: '10px 20px', background: '#4f46e5', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
      >
        Log In (Demo)
      </button>
    </div>
  );
}