import React from 'react';

const AppError = () => (
  <div
    style={{
      height: '100vh',
      width: '100vw',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <div>
      <h1>Oh no! Could not load vikibell.com, refresh or find me on social:</h1>
      <ul style={{ marginTop: 20 }}>
        <li>
          <a href="https://twitter.com/Vikiibell/">Twitter</a>
        </li>
        <li>
          <a href="https://www.instagram.com/vikibell/">Instagram</a>
        </li>
      </ul>
    </div>
  </div>
);

export default AppError;
