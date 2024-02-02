// AlertNotification.js

import React, { useState, useEffect } from 'react';
import './AlertNotification.css'; // Create a corresponding CSS file for styling

const AlertNotification = ({ message, type, onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
      onClose();
    }, 3000); // Set the duration for how long the alert should be visible (in milliseconds)

    return () => clearTimeout(timeout);
  }, [onClose]);

  return (
    <div className={`alert-notification ${type} ${isVisible ? 'visible' : ''}`}>
      <p>{message}</p>
      <button onClick={() => setIsVisible(false)}>Close</button>
    </div>
  );
};

export default AlertNotification;
