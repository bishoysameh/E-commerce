import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AuthContextProvider } from './context/AuthContext';
import { WorkoutsContextProvider } from './context/CartContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<AuthContextProvider>
  <WorkoutsContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </WorkoutsContextProvider>
</AuthContextProvider>
);


