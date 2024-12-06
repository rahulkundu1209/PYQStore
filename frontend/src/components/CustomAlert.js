import React, { useEffect } from 'react';

const CustomAlert = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000); // Auto close after 3 seconds

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed bottom-5 left-5 bg-green-500 text-white p-4 rounded-lg shadow-lg animate-fade-in-out">
      {message}
    </div>
  );
};

export default CustomAlert;